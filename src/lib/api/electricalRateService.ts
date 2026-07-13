// lib/api/electricalRateService.ts
import { ApiResponse } from '@/lib/types';

export interface ElectricalRate {
  id: string;
  type: 'temporary' | 'exhibition' | 'both';
  ratePerKW: number;
  effectiveFrom: string;
  effectiveTo: string | null;
  isActive: boolean;
  description: string;
}

export interface ElectricalRateFilters {
  type?: string;
  isActive?: boolean;
  search?: string;
  effectiveDate?: string;
}

export interface Statistics {
  totalRates: number;
  activeRates: number;
  inactiveRates: number;
  typeStats: Array<{
    type: string;
    count: number;
  }>;
  rateStats: {
    minRate: number;
    maxRate: number;
    avgRate: number;
  };
}

const getMockRates = (): ElectricalRate[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem('mock_electrical_rates');
  if (stored) return JSON.parse(stored);
  
  const seed: ElectricalRate[] = [
    { id: 'er-1', type: 'temporary', ratePerKW: 250, effectiveFrom: '2026-01-01', effectiveTo: null, isActive: true, description: 'Standard temporary power' },
    { id: 'er-2', type: 'exhibition', ratePerKW: 400, effectiveFrom: '2026-01-01', effectiveTo: null, isActive: true, description: 'Exhibition days premium supply' },
    { id: 'er-3', type: 'both', ratePerKW: 550, effectiveFrom: '2026-01-01', effectiveTo: null, isActive: true, description: 'Combined package rate' }
  ];
  
  localStorage.setItem('mock_electrical_rates', JSON.stringify(seed));
  return seed;
};

const saveMockRates = (rates: ElectricalRate[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('mock_electrical_rates', JSON.stringify(rates));
  }
};

export const electricalRateService = {
  // Get all rates with optional filters
  async getAll(filters?: ElectricalRateFilters): Promise<ApiResponse<ElectricalRate[]>> {
    // TODO: Connect to backend API: GET /api/admin/electrical-rates
    let rates = getMockRates();
    if (filters?.type) {
      rates = rates.filter(r => r.type === filters.type);
    }
    if (filters?.isActive !== undefined) {
      rates = rates.filter(r => r.isActive === filters.isActive);
    }
    if (filters?.search) {
      const q = filters.search.toLowerCase();
      rates = rates.filter(r => r.description.toLowerCase().includes(q));
    }
    return {
      success: true,
      data: rates
    };
  },

  // Get single rate by ID
  async getById(id: string): Promise<ApiResponse<ElectricalRate>> {
    const rates = getMockRates();
    const found = rates.find(r => r.id === id);
    if (!found) throw new Error('Rate not found');
    return {
      success: true,
      data: found
    };
  },

  // Create new rate
  async create(data: Partial<ElectricalRate>): Promise<ApiResponse<ElectricalRate>> {
    const rates = getMockRates();
    const newRate: ElectricalRate = {
      id: 'er-' + Math.random().toString(36).substring(2, 9),
      type: data.type || 'temporary',
      ratePerKW: Number(data.ratePerKW) || 0,
      effectiveFrom: data.effectiveFrom || new Date().toISOString().split('T')[0],
      effectiveTo: data.effectiveTo || null,
      isActive: data.isActive !== undefined ? data.isActive : true,
      description: data.description || ''
    };
    
    rates.push(newRate);
    saveMockRates(rates);
    
    return {
      success: true,
      data: newRate
    };
  },

  // Update rate
  async update(id: string, data: Partial<ElectricalRate>): Promise<ApiResponse<ElectricalRate>> {
    const rates = getMockRates();
    const idx = rates.findIndex(r => r.id === id);
    if (idx === -1) throw new Error('Rate not found');
    
    const updated = {
      ...rates[idx],
      ...data,
      ratePerKW: data.ratePerKW !== undefined ? Number(data.ratePerKW) : rates[idx].ratePerKW,
    };
    
    rates[idx] = updated;
    saveMockRates(rates);
    
    return {
      success: true,
      data: updated
    };
  },

  // Delete rate
  async delete(id: string): Promise<ApiResponse> {
    const rates = getMockRates();
    const filtered = rates.filter(r => r.id !== id);
    saveMockRates(filtered);
    return { success: true, data: null };
  },

  // Toggle status
  async toggleStatus(id: string, isActive: boolean): Promise<ApiResponse<ElectricalRate>> {
    return this.update(id, { isActive });
  },

  // Get active rate by type
  async getActiveRate(type: string, date?: string): Promise<ApiResponse<ElectricalRate>> {
    const rates = getMockRates();
    const found = rates.find(r => r.type === type && r.isActive);
    if (!found) throw new Error(`No active rate found for type ${type}`);
    return {
      success: true,
      data: found
    };
  },

  // Get statistics
  async getStatistics(): Promise<ApiResponse<Statistics>> {
    const rates = getMockRates();
    const active = rates.filter(r => r.isActive).length;
    const typeCounts: Record<string, number> = {};
    let sumRate = 0;
    let minRate = rates.length ? rates[0].ratePerKW : 0;
    let maxRate = rates.length ? rates[0].ratePerKW : 0;
    
    rates.forEach(r => {
      typeCounts[r.type] = (typeCounts[r.type] || 0) + 1;
      sumRate += r.ratePerKW;
      if (r.ratePerKW < minRate) minRate = r.ratePerKW;
      if (r.ratePerKW > maxRate) maxRate = r.ratePerKW;
    });
    
    const stats: Statistics = {
      totalRates: rates.length,
      activeRates: active,
      inactiveRates: rates.length - active,
      typeStats: Object.entries(typeCounts).map(([type, count]) => ({ type, count })),
      rateStats: {
        minRate,
        maxRate,
        avgRate: rates.length ? sumRate / rates.length : 0
      }
    };
    
    return {
      success: true,
      data: stats
    };
  },

  // Bulk delete rates
  async bulkDelete(ids: string[]): Promise<ApiResponse> {
    const rates = getMockRates();
    const filtered = rates.filter(r => !ids.includes(r.id));
    saveMockRates(filtered);
    return { success: true, data: null };
  }
};
