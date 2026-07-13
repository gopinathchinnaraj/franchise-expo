// lib/api/floorPlans.ts
import { Shape, ShapeType, FloorPlan as FloorPlanType } from '@/lib/types';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  total?: number;
  page?: number;
  totalPages?: number;
  floorPlanId?: string | number;
}

const getMockFloorPlans = (): FloorPlanType[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem('mock_floor_plans');
  if (stored) return JSON.parse(stored);
  
  const seed: FloorPlanType[] = [
    {
      id: 'fp-1',
      name: 'Main Exhibition Floor',
      description: 'Primary layout for the DIEMEX 2026 expo.',
      version: '1.0',
      shapes: [
        {
          id: 's-1',
          type: 'booth',
          x: 100,
          y: 100,
          width: 80,
          height: 80,
          rotation: 0,
          color: 'rgba(16, 185, 129, 0.2)',
          borderColor: '#10b981',
          borderWidth: 2,
          fontSize: 12,
          text: 'B8103 (ALFERT)',
          zIndex: 2,
          isLocked: false,
          metadata: { boothNumber: 'B8103', companyName: 'ALFERT, LLP', status: 'booked', isUserBooth: true }
        },
        {
          id: 's-2',
          type: 'booth',
          x: 220,
          y: 100,
          width: 80,
          height: 80,
          rotation: 0,
          color: 'rgba(59, 130, 246, 0.2)',
          borderColor: '#3b82f6',
          borderWidth: 2,
          fontSize: 12,
          text: 'C5027 (ALPER FRIGO)',
          zIndex: 2,
          isLocked: false,
          metadata: { boothNumber: 'C5027', companyName: 'ALPER FRIGO LOGISTICS', status: 'booked' }
        },
        {
          id: 's-3',
          type: 'info',
          x: 50,
          y: 50,
          width: 40,
          height: 40,
          rotation: 0,
          color: 'rgba(245, 158, 11, 0.3)',
          borderColor: '#f59e0b',
          borderWidth: 2,
          fontSize: 10,
          text: 'Help Desk',
          zIndex: 1,
          isLocked: true
        }
      ],
      scale: 1,
      gridSize: 20,
      showGrid: true,
      isPublic: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ];
  
  localStorage.setItem('mock_floor_plans', JSON.stringify(seed));
  return seed;
};

const saveMockFloorPlans = (plans: FloorPlanType[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('mock_floor_plans', JSON.stringify(plans));
  }
};

export const floorPlansAPI = {
  // Test API connection
  testConnection: async (): Promise<ApiResponse> => {
    return { success: true, message: 'Connected to floor plans API (Mock)' };
  },

  // Get All Floor Plans
  getAll: async (params: any = {}): Promise<ApiResponse<FloorPlanType[]>> => {
    // TODO: Connect to backend API: GET /floor-plans
    console.log('📡 [Mock API] Fetching floor plans with params:', params);
    const plans = getMockFloorPlans();
    return {
      success: true,
      data: plans,
      total: plans.length,
      page: 1,
      totalPages: 1,
      floorPlanId: plans[0]?.id
    };
  },

  // Get Single Floor Plan
  getById: async (id: string | number): Promise<ApiResponse<FloorPlanType>> => {
    const plans = getMockFloorPlans();
    const found = plans.find(p => p.id === String(id));
    if (!found) {
      return { success: false, error: 'Floor plan not found' };
    }
    return {
      success: true,
      data: found,
      floorPlanId: found.id
    };
  },

  // Create Floor Plan
  create: async (data: Omit<FloorPlanType, 'id'>): Promise<ApiResponse<FloorPlanType>> => {
    const plans = getMockFloorPlans();
    const newPlan: FloorPlanType = {
      ...data,
      id: 'fp-' + Math.random().toString(36).substring(2, 9),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    plans.push(newPlan);
    saveMockFloorPlans(plans);
    return {
      success: true,
      data: newPlan
    };
  },

  // Update Floor Plan
  update: async (id: string | number, data: Partial<FloorPlanType>): Promise<ApiResponse<FloorPlanType>> => {
    const plans = getMockFloorPlans();
    const idx = plans.findIndex(p => p.id === String(id));
    if (idx === -1) throw new Error('Floor plan not found');
    
    const updated = {
      ...plans[idx],
      ...data,
      updatedAt: new Date().toISOString()
    };
    plans[idx] = updated;
    saveMockFloorPlans(plans);
    return {
      success: true,
      data: updated
    };
  },

  // Delete Floor Plan
  delete: async (id: string | number): Promise<ApiResponse> => {
    const plans = getMockFloorPlans();
    const filtered = plans.filter(p => p.id !== String(id));
    saveMockFloorPlans(filtered);
    return { success: true, data: null };
  },

  // Quick Save
  quickSave: async (id: string | number, shapes: Shape[]): Promise<ApiResponse<FloorPlanType>> => {
    return floorPlansAPI.update(id, { shapes });
  },

  // Duplicate Floor Plan
  duplicate: async (id: string | number, newName?: string): Promise<ApiResponse<FloorPlanType>> => {
    const plans = getMockFloorPlans();
    const found = plans.find(p => p.id === String(id));
    if (!found) throw new Error('Floor plan not found');
    
    const duplicatePlan: FloorPlanType = {
      ...found,
      id: 'fp-' + Math.random().toString(36).substring(2, 9),
      name: newName || `${found.name} (Copy)`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    plans.push(duplicatePlan);
    saveMockFloorPlans(plans);
    return {
      success: true,
      data: duplicatePlan
    };
  }
};
floorPlansAPI.quickSave = floorPlansAPI.quickSave.bind(floorPlansAPI);
floorPlansAPI.update = floorPlansAPI.update.bind(floorPlansAPI);
