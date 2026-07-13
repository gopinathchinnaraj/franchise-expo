// lib/api/hostessCategoryService.ts
import { ApiResponse } from '@/lib/types';

export interface HostessCategory {
  id: string;
  category: 'A' | 'B';
  ratePerDay: number;
  workingHours: number;
  description: string;
  isActive: boolean;
}

export interface HostessFilters {
  isActive?: boolean;
  category?: string;
}

export interface CostCalculation {
  category: 'A' | 'B';
  ratePerDay: number;
  workingHours: number;
  days: number;
  hours: number;
  totalCost: number;
}

export interface Statistics {
  totalCategories: number;
  activeCategories: number;
  inactiveCategories: number;
  rateStats: {
    minRate: number;
    maxRate: number;
    avgRate: number;
  };
  categoryRates: HostessCategory[];
}

const getMockCategories = (): HostessCategory[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem('mock_hostess_categories');
  if (stored) return JSON.parse(stored);
  
  const seed: HostessCategory[] = [
    { id: 'hc-1', category: 'A', ratePerDay: 5000, workingHours: 8, description: 'Premium Bilingual Hostess', isActive: true },
    { id: 'hc-2', category: 'B', ratePerDay: 3500, workingHours: 8, description: 'Standard Event Support Staff', isActive: true }
  ];
  
  localStorage.setItem('mock_hostess_categories', JSON.stringify(seed));
  return seed;
};

const saveMockCategories = (categories: HostessCategory[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('mock_hostess_categories', JSON.stringify(categories));
  }
};

export const hostessCategoryService = {
  // Get all categories with optional filters
  async getAll(filters?: HostessFilters): Promise<ApiResponse<HostessCategory[]>> {
    // TODO: Connect to backend API: GET /api/admin/hostess-rates
    let categories = getMockCategories();
    if (filters?.isActive !== undefined) {
      categories = categories.filter(c => c.isActive === filters.isActive);
    }
    if (filters?.category) {
      categories = categories.filter(c => c.category === filters.category);
    }
    return {
      success: true,
      data: categories
    };
  },

  // Get single category by ID
  async getById(id: string): Promise<ApiResponse<HostessCategory>> {
    const categories = getMockCategories();
    const found = categories.find(c => c.id === id);
    if (!found) throw new Error('Category not found');
    return {
      success: true,
      data: found
    };
  },

  // Get category by type
  async getByType(type: string): Promise<ApiResponse<HostessCategory>> {
    const categories = getMockCategories();
    const found = categories.find(c => c.category === type);
    if (!found) throw new Error(`Category type ${type} not found`);
    return {
      success: true,
      data: found
    };
  },

  // Create new category
  async create(data: Partial<HostessCategory>): Promise<ApiResponse<HostessCategory>> {
    const categories = getMockCategories();
    const newCategory: HostessCategory = {
      id: 'hc-' + Math.random().toString(36).substring(2, 9),
      category: (data.category === 'A' || data.category === 'B') ? data.category : 'B',
      ratePerDay: Number(data.ratePerDay) || 0,
      workingHours: Number(data.workingHours) || 8,
      description: data.description || '',
      isActive: data.isActive !== undefined ? data.isActive : true
    };
    
    categories.push(newCategory);
    saveMockCategories(categories);
    
    return {
      success: true,
      data: newCategory
    };
  },

  // Update category
  async update(id: string, data: Partial<HostessCategory>): Promise<ApiResponse<HostessCategory>> {
    const categories = getMockCategories();
    const idx = categories.findIndex(c => c.id === id);
    if (idx === -1) throw new Error('Category not found');
    
    const updated = {
      ...categories[idx],
      ...data,
      ratePerDay: data.ratePerDay !== undefined ? Number(data.ratePerDay) : categories[idx].ratePerDay,
      workingHours: data.workingHours !== undefined ? Number(data.workingHours) : categories[idx].workingHours,
    };
    
    categories[idx] = updated;
    saveMockCategories(categories);
    
    return {
      success: true,
      data: updated
    };
  },

  // Delete category
  async delete(id: string): Promise<ApiResponse> {
    const categories = getMockCategories();
    const filtered = categories.filter(c => c.id !== id);
    saveMockCategories(filtered);
    return { success: true, data: null };
  },

  // Toggle status
  async toggleStatus(id: string, isActive: boolean): Promise<ApiResponse<HostessCategory>> {
    return this.update(id, { isActive });
  },

  // Calculate cost
  async calculateCost(category: string, days: number, hours?: number): Promise<ApiResponse<CostCalculation>> {
    const categories = getMockCategories();
    const found = categories.find(c => c.category === category);
    if (!found) throw new Error(`Category ${category} not found`);
    
    const h = hours || found.workingHours;
    const totalCost = found.ratePerDay * days;
    
    const calc: CostCalculation = {
      category: found.category,
      ratePerDay: found.ratePerDay,
      workingHours: found.workingHours,
      days,
      hours: h,
      totalCost
    };
    
    return {
      success: true,
      data: calc
    };
  },

  // Get statistics
  async getStatistics(): Promise<ApiResponse<Statistics>> {
    const categories = getMockCategories();
    const active = categories.filter(c => c.isActive).length;
    let sumRate = 0;
    let minRate = categories.length ? categories[0].ratePerDay : 0;
    let maxRate = categories.length ? categories[0].ratePerDay : 0;
    
    categories.forEach(c => {
      sumRate += c.ratePerDay;
      if (c.ratePerDay < minRate) minRate = c.ratePerDay;
      if (c.ratePerDay > maxRate) maxRate = c.ratePerDay;
    });
    
    const stats: Statistics = {
      totalCategories: categories.length,
      activeCategories: active,
      inactiveCategories: categories.length - active,
      rateStats: {
        minRate,
        maxRate,
        avgRate: categories.length ? sumRate / categories.length : 0
      },
      categoryRates: categories
    };
    
    return {
      success: true,
      data: stats
    };
  },

  // Bulk update
  async bulkUpdate(updates: Array<{ category: string; ratePerDay: number; workingHours: number }>): Promise<ApiResponse> {
    const categories = getMockCategories();
    
    const updated = categories.map(c => {
      const match = updates.find(u => u.category === c.category);
      if (match) {
        return {
          ...c,
          ratePerDay: match.ratePerDay,
          workingHours: match.workingHours
        };
      }
      return c;
    });
    
    saveMockCategories(updated);
    return { success: true, data: null };
  }
};
