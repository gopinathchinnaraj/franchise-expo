// lib/api/housekeepingService.ts
import { ApiResponse } from '@/lib/types';

export interface HousekeepingConfig {
  id: string;
  chargesPerShift: number;
  shiftHours: number;
  description?: string;
  updatedAt: string;
  createdAt?: string;
}

export interface CostCalculation {
  chargesPerShift: number;
  shiftHours: number;
  numberOfShifts: number;
  totalCost: number;
}

export interface CustomHoursCalculation {
  chargesPerShift: number;
  shiftHours: number;
  hourlyRate: number;
  hours: number;
  numberOfStaff: number;
  totalCost: number;
}

export interface BulkCalculationItem {
  name?: string;
  shifts: number;
  chargesPerShift: number;
  totalCost: number;
}

export interface BulkCalculationResult {
  items: BulkCalculationItem[];
  grandTotal: number;
  rateApplied: number;
}

const getMockConfig = (): HousekeepingConfig => {
  if (typeof window === 'undefined') {
    return { id: 'hk-1', chargesPerShift: 1800, shiftHours: 8, updatedAt: new Date().toISOString() };
  }
  const stored = localStorage.getItem('mock_housekeeping_config');
  if (stored) return JSON.parse(stored);
  
  const seed: HousekeepingConfig = {
    id: 'hk-1',
    chargesPerShift: 1800,
    shiftHours: 8,
    description: 'Standard cleaning crew shift charges',
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString()
  };
  
  localStorage.setItem('mock_housekeeping_config', JSON.stringify(seed));
  return seed;
};

const saveMockConfig = (config: HousekeepingConfig) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('mock_housekeeping_config', JSON.stringify(config));
  }
};

export const housekeepingService = {
  // Get current configuration
  async getConfig(): Promise<ApiResponse<HousekeepingConfig>> {
    // TODO: Connect to backend API: GET /api/admin/housekeeping/config
    return {
      success: true,
      data: getMockConfig()
    };
  },

  // Update configuration
  async updateConfig(chargesPerShift: number, shiftHours?: number): Promise<ApiResponse<HousekeepingConfig>> {
    // TODO: Connect to backend API: PUT /api/admin/housekeeping/config
    const current = getMockConfig();
    const updated = {
      ...current,
      chargesPerShift,
      shiftHours: shiftHours || current.shiftHours,
      updatedAt: new Date().toISOString()
    };
    saveMockConfig(updated);
    
    // Add entry to history
    if (typeof window !== 'undefined') {
      const history = JSON.parse(localStorage.getItem('mock_housekeeping_history') || '[]');
      history.unshift({
        chargesPerShift: updated.chargesPerShift,
        shiftHours: updated.shiftHours,
        updatedAt: updated.updatedAt
      });
      localStorage.setItem('mock_housekeeping_history', JSON.stringify(history));
    }

    return {
      success: true,
      data: updated
    };
  },

  // Calculate cost for shifts
  async calculateCost(shifts: number): Promise<ApiResponse<CostCalculation>> {
    const config = getMockConfig();
    const totalCost = config.chargesPerShift * shifts;
    return {
      success: true,
      data: {
        chargesPerShift: config.chargesPerShift,
        shiftHours: config.shiftHours,
        numberOfShifts: shifts,
        totalCost
      }
    };
  },

  // Calculate cost for custom hours
  async calculateCustomHours(hours: number, staff: number = 1): Promise<ApiResponse<CustomHoursCalculation>> {
    const config = getMockConfig();
    const hourlyRate = config.chargesPerShift / config.shiftHours;
    const totalCost = hourlyRate * hours * staff;
    return {
      success: true,
      data: {
        chargesPerShift: config.chargesPerShift,
        shiftHours: config.shiftHours,
        hourlyRate,
        hours,
        numberOfStaff: staff,
        totalCost
      }
    };
  },

  // Bulk calculate
  async bulkCalculate(shifts: Array<{ name?: string; shifts: number }>): Promise<ApiResponse<BulkCalculationResult>> {
    const config = getMockConfig();
    let grandTotal = 0;
    const items = shifts.map(item => {
      const totalCost = item.shifts * config.chargesPerShift;
      grandTotal += totalCost;
      return {
        name: item.name,
        shifts: item.shifts,
        chargesPerShift: config.chargesPerShift,
        totalCost
      };
    });
    return {
      success: true,
      data: {
        items,
        grandTotal,
        rateApplied: config.chargesPerShift
      }
    };
  },

  // Get rate history
  async getHistory(): Promise<ApiResponse<Array<{ chargesPerShift: number; shiftHours: number; updatedAt: string }>>> {
    if (typeof window === 'undefined') return { success: true, data: [] };
    const history = JSON.parse(localStorage.getItem('mock_housekeeping_history') || '[]');
    if (history.length === 0) {
      const config = getMockConfig();
      const initialHistory = [{
        chargesPerShift: config.chargesPerShift,
        shiftHours: config.shiftHours,
        updatedAt: config.updatedAt
      }];
      localStorage.setItem('mock_housekeeping_history', JSON.stringify(initialHistory));
      return { success: true, data: initialHistory };
    }
    return {
      success: true,
      data: history
    };
  },

  // Reset to default
  async resetToDefault(): Promise<ApiResponse<HousekeepingConfig>> {
    const defaultVal: HousekeepingConfig = {
      id: 'hk-1',
      chargesPerShift: 1800,
      shiftHours: 8,
      description: 'Standard cleaning crew shift charges',
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString()
    };
    saveMockConfig(defaultVal);
    return {
      success: true,
      data: defaultVal
    };
  },

  // Get statistics
  async getStatistics(): Promise<ApiResponse<any>> {
    const config = getMockConfig();
    return {
      success: true,
      data: {
        currentRate: config.chargesPerShift,
        shiftHours: config.shiftHours,
        totalCalculationsMade: 14,
        averageRequestedShifts: 3.5
      }
    };
  }
};
