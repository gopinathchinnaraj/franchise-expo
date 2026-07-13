// lib/api/compressedAirService.ts
import { ApiResponse } from '@/lib/types';

export interface CompressedAirOption {
  id: string;
  cfmRange: string;
  costPerConnection: number;
  powerKW: number;
  isActive: boolean;
  displayOrder: number;
  totalCost?: number;
}

const getMockOptions = (): CompressedAirOption[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem('mock_compressed_air');
  if (stored) return JSON.parse(stored);
  
  const seed: CompressedAirOption[] = [
    { id: 'ca-1', cfmRange: '0 - 15 CFM', costPerConnection: 15000, powerKW: 2.2, isActive: true, displayOrder: 1 },
    { id: 'ca-2', cfmRange: '16 - 30 CFM', costPerConnection: 25000, powerKW: 4.0, isActive: true, displayOrder: 2 },
    { id: 'ca-3', cfmRange: '31 - 50 CFM', costPerConnection: 38000, powerKW: 7.5, isActive: true, displayOrder: 3 }
  ];
  
  localStorage.setItem('mock_compressed_air', JSON.stringify(seed));
  return seed;
};

const saveMockOptions = (options: CompressedAirOption[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('mock_compressed_air', JSON.stringify(options));
  }
};

export const compressedAirService = {
  // Get all options
  async getAll(): Promise<ApiResponse<CompressedAirOption[]>> {
    // TODO: Connect to backend API: GET /api/admin/compressed-air
    return {
      success: true,
      data: getMockOptions()
    };
  },

  // Create new option
  async create(data: Partial<CompressedAirOption>): Promise<ApiResponse<CompressedAirOption>> {
    // TODO: Connect to backend API: POST /api/admin/compressed-air
    const options = getMockOptions();
    const newOption: CompressedAirOption = {
      id: 'ca-' + Math.random().toString(36).substring(2, 9),
      cfmRange: data.cfmRange || 'New Range',
      costPerConnection: Number(data.costPerConnection) || 0,
      powerKW: Number(data.powerKW) || 0,
      isActive: data.isActive !== undefined ? data.isActive : true,
      displayOrder: Number(data.displayOrder) || options.length + 1
    };
    
    options.push(newOption);
    saveMockOptions(options);
    
    return {
      success: true,
      data: newOption
    };
  },

  // Update option
  async update(id: string, data: Partial<CompressedAirOption>): Promise<ApiResponse<CompressedAirOption>> {
    // TODO: Connect to backend API: PUT /api/admin/compressed-air/:id
    const options = getMockOptions();
    const idx = options.findIndex(o => o.id === id);
    if (idx === -1) throw new Error('Option not found');
    
    const updated = {
      ...options[idx],
      ...data,
      costPerConnection: data.costPerConnection !== undefined ? Number(data.costPerConnection) : options[idx].costPerConnection,
      powerKW: data.powerKW !== undefined ? Number(data.powerKW) : options[idx].powerKW,
      displayOrder: data.displayOrder !== undefined ? Number(data.displayOrder) : options[idx].displayOrder,
    };
    
    options[idx] = updated;
    saveMockOptions(options);
    
    return {
      success: true,
      data: updated
    };
  },

  // Delete option
  async delete(id: string): Promise<ApiResponse> {
    // TODO: Connect to backend API: DELETE /api/admin/compressed-air/:id
    const options = getMockOptions();
    const filtered = options.filter(o => o.id !== id);
    saveMockOptions(filtered);
    return { success: true, data: null };
  },

  // Toggle status
  async toggleStatus(id: string, isActive: boolean): Promise<ApiResponse<CompressedAirOption>> {
    // TODO: Connect to backend API: PATCH /api/admin/compressed-air/:id/toggle-status
    return this.update(id, { isActive });
  }
};
