// app/api/boothsAPI.ts
import { ApiResponse, FloorPlanData } from '@/lib/types';

export type { FloorPlanData, ApiResponse };

// Initialize mock floor plan in localStorage
const getMockFloorPlan = (): FloorPlanData => {
  if (typeof window === 'undefined') {
    return { id: 1, baseImageUrl: '/images/floorplan.png', booths: [] };
  }
  
  const stored = localStorage.getItem('mock_booths_floor_plan');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      // Fallback
    }
  }

  const seed: FloorPlanData = {
    id: 1,
    baseImageUrl: '/images/floorplan.png',
    imageWidth: 1200,
    imageHeight: 800,
    name: 'Main Hall Plan',
    booths: [
      { id: '1', boothNumber: 'B8103', companyName: 'ALFERT, LLP', status: 'booked', xPercent: 10, yPercent: 15, widthPercent: 8, heightPercent: 10 },
      { id: '2', boothNumber: 'C5027', companyName: 'ALPER FRIGO LOGISTICS', status: 'booked', xPercent: 20, yPercent: 15, widthPercent: 8, heightPercent: 10 },
      { id: '3', boothNumber: 'B1021', companyName: '1C Company', status: 'available', xPercent: 30, yPercent: 15, widthPercent: 8, heightPercent: 10 }
    ]
  };

  localStorage.setItem('mock_booths_floor_plan', JSON.stringify(seed));
  return seed;
};

const saveMockFloorPlan = (plan: FloorPlanData) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('mock_booths_floor_plan', JSON.stringify(plan));
  }
};

export const boothsAPI = {
  /* ================= GET FLOOR PLAN ================= */
  getFloorPlan: async (): Promise<ApiResponse<FloorPlanData>> => {
    // TODO: Connect to backend: GET /floor-plan
    return {
      success: true,
      data: getMockFloorPlan()
    };
  },

  /* ================= UPLOAD IMAGE ================= */
  uploadImage: async (formData: FormData): Promise<ApiResponse> => {
    // TODO: Connect to backend: POST /floor-plan/upload-image
    console.log('Uploading image via mock API...');
    
    // Simulate image upload returning mock URL
    const mockUrl = '/images/floorplan.png';
    const plan = getMockFloorPlan();
    plan.baseImageUrl = mockUrl;
    saveMockFloorPlan(plan);
    
    return {
      success: true,
      data: plan
    };
  },

  /* ================= RESET FLOOR PLAN ================= */
  reset: async (): Promise<ApiResponse> => {
    // TODO: Connect to backend: POST /floor-plan/reset
    const defaultVal: FloorPlanData = {
      id: 1,
      baseImageUrl: null,
      booths: []
    };
    saveMockFloorPlan(defaultVal);
    return {
      success: true,
      data: defaultVal
    };
  },

  /* ================= SAVE FLOOR PLAN ================= */
  saveFloorPlan: async (data: {
    baseImageUrl?: string | null;
    booths?: any[];
  }): Promise<ApiResponse> => {
    // TODO: Connect to backend: POST /floor-plan/save-floor-plan
    const plan = getMockFloorPlan();
    if (data.baseImageUrl !== undefined) plan.baseImageUrl = data.baseImageUrl;
    if (data.booths !== undefined) plan.booths = data.booths;
    saveMockFloorPlan(plan);
    return {
      success: true,
      data: plan
    };
  },

  /* ================= ADD BOOTH ================= */
  addBooth: async (boothData: any): Promise<ApiResponse> => {
    // TODO: Connect to backend: POST /floor-plan/booth
    const plan = getMockFloorPlan();
    const newBooth = {
      id: 'booth-' + Math.random().toString(36).substring(2, 9),
      status: 'available',
      ...boothData
    };
    if (!plan.booths) plan.booths = [];
    plan.booths.push(newBooth);
    saveMockFloorPlan(plan);
    return {
      success: true,
      data: newBooth
    };
  },

  /* ================= UPDATE BOOTH ================= */
  updateBooth: async (boothId: string, updateData: any): Promise<ApiResponse> => {
    // TODO: Connect to backend: PUT /floor-plan/booth/:id
    const plan = getMockFloorPlan();
    if (!plan.booths) return { success: false, error: 'No booths found' };
    const idx = plan.booths.findIndex(b => b.id === boothId);
    if (idx === -1) return { success: false, error: 'Booth not found' };
    
    plan.booths[idx] = {
      ...plan.booths[idx],
      ...updateData
    };
    saveMockFloorPlan(plan);
    return {
      success: true,
      data: plan.booths[idx]
    };
  },

  /* ================= DELETE BOOTH ================= */
  deleteBooth: async (boothId: string): Promise<ApiResponse> => {
    // TODO: Connect to backend: DELETE /floor-plan/booth/:id
    const plan = getMockFloorPlan();
    if (!plan.booths) return { success: false, error: 'No booths found' };
    plan.booths = plan.booths.filter(b => b.id !== boothId);
    saveMockFloorPlan(plan);
    return {
      success: true,
      data: null
    };
  },

  /* ================= GET STATISTICS ================= */
  getStatistics: async (): Promise<ApiResponse> => {
    // TODO: Connect to backend: GET /floor-plan/statistics
    const plan = getMockFloorPlan();
    const booths = plan.booths || [];
    return {
      success: true,
      data: {
        totalBooths: booths.length,
        bookedBooths: booths.filter(b => b.status === 'booked').length,
        availableBooths: booths.filter(b => b.status === 'available').length,
        reservedBooths: booths.filter(b => b.status === 'reserved').length
      }
    };
  }
};
