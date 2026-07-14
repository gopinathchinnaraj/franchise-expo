// lib/api/exhibitors.ts

export type ExhibitorStatus =
  | "pending"
  | "active"
  | "inactive"
  | "approved"
  | "rejected";

export interface Exhibitor {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  sector: string;

  address?: string;
  website?: string;

  booth: string;
  boothNumber?: string;
  boothSize?: string;
  boothType?: string;
  boothDimensions?: string;
  boothNotes?: string;

  status: string;
  originalPassword?: string;
  createdAt: string;

  stallDetails?: {
    hall?: string;
    pavilion?: string;
    size?: string;
    type?: string;
    dimensions?: string;
    notes?: string;
  };
}

export interface ExhibitorStats {
  total: number;
  byStatus: Array<{ _id: string; count: number }>;
  bySector: Array<{ _id: string; count: number }>;
}

export interface CreateExhibitorData {
  name: string;
  email: string;
  phone: string;
  company: string;
  sector: string;
  boothNumber: string;
  password: string;
  status: string;
  boothSize?: string;
  boothType?: string;
  boothDimensions?: string;
  boothNotes?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  message?: string;
  error?: string;
}


// Initialize mock exhibitors database in localStorage
const getMockDatabase = (): Exhibitor[] => {
  if (typeof window === 'undefined') return [];
  
  const data = localStorage.getItem('mock_exhibitors');
  if (data) {
    try {
      return JSON.parse(data);
    } catch {
      // Fallback below
    }
  }

  // Initial seed data
  const seed: Exhibitor[] = [
    {
      id: 'ex-1',
      name: 'John Doe',
      email: 'exhibitor@example.com',
      phone: '+91 98765 43210',
      company: 'ALFERT, LLP',
      sector: 'Automobile',
      booth: 'B8103',
      boothNumber: 'B8103',
      boothSize: '36 sq mtr',
      boothType: 'premium',
      boothDimensions: '6m x 6m',
      boothNotes: 'Requires corner spot',
      status: 'active',
      createdAt: new Date().toISOString(),
      address: 'Almaty, Kazakhstan',
      website: 'www.alfert.com'
    },
    {
      id: 'ex-2',
      name: 'Jane Smith',
      email: 'ex2@example.com',
      phone: '+90 555 123 4567',
      company: 'ALPER FRIGO LOGISTICS',
      sector: 'Technology',
      booth: 'C5027',
      boothNumber: 'C5027',
      boothSize: '18 sq mtr',
      boothType: 'standard',
      boothDimensions: '6m x 3m',
      status: 'active',
      createdAt: new Date().toISOString(),
      address: 'Istanbul, Turkey',
      website: 'www.alperfrigo.com'
    },
    {
      id: 'ex-3',
      name: 'Ivan Petrov',
      email: 'ex3@example.com',
      phone: '+7 999 123 4567',
      company: 'ALYANSTRANSTORG',
      sector: 'Manufacturing',
      booth: 'Unassigned-1',
      boothNumber: 'Unassigned-1',
      boothSize: '12 sq mtr',
      boothType: 'standard',
      boothDimensions: '4m x 3m',
      status: 'pending',
      createdAt: new Date().toISOString(),
      address: 'Moscow, Russia'
    }
  ];

  localStorage.setItem('mock_exhibitors', JSON.stringify(seed));
  return seed;
};

const saveMockDatabase = (db: Exhibitor[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('mock_exhibitors', JSON.stringify(db));
  }
};

import axios from 'axios';

const API_URL = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/+$/, '').replace(/\/api$/, '') + '/api';

// Helper to get Admin headers
const getAdminHeaders = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('admin_token');
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  return {};
};

// Helper to get Exhibitor headers
const getExhibitorHeaders = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('exhibitor_token');
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  return {};
};

export const exhibitorsAPI = {
  // Get all exhibitors with filters and search
  getAll: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
    sector?: string;
    status?: string;
  }): Promise<PaginatedResponse<Exhibitor>> => {
    try {
      const response = await axios.get(`${API_URL}/exhibitors`, {
        params,
        headers: getAdminHeaders()
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.error || error.response?.data?.message || error.message || 'Failed to fetch exhibitors');
    }
  },

  // Get single exhibitor by ID
  getById: async (id: string): Promise<{ success: boolean; data: Exhibitor }> => {
    try {
      const response = await axios.get(`${API_URL}/exhibitors/${id}`, {
        headers: getAdminHeaders()
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.error || error.message || 'Exhibitor not found');
    }
  },

  // Get stats
  getStats: async (): Promise<ExhibitorStats> => {
    try {
      const response = await axios.get(`${API_URL}/exhibitors/stats/general`, {
        headers: getAdminHeaders()
      });
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.error || error.message || 'Failed to fetch stats');
    }
  },

  // Create exhibitor
  create: async (data: CreateExhibitorData): Promise<Exhibitor & { originalPassword: string }> => {
    try {
      const response = await axios.post(`${API_URL}/exhibitors`, data, {
        headers: getAdminHeaders()
      });
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.error || error.message || 'Failed to create exhibitor');
    }
  },

  // Update exhibitor
  update: async (id: string, data: Partial<CreateExhibitorData>): Promise<Exhibitor> => {
    try {
      const response = await axios.put(`${API_URL}/exhibitors/${id}`, data, {
        headers: getAdminHeaders()
      });
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.error || error.message || 'Failed to update exhibitor');
    }
  },

  // Bulk update exhibitor status
  bulkUpdateStatus: async (ids: string[], status: string): Promise<{ affectedCount: number }> => {
    try {
      const response = await axios.post(`${API_URL}/exhibitors/bulk/update-status`, { ids, status }, {
        headers: getAdminHeaders()
      });
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.error || error.message || 'Failed to update status');
    }
  },

  // Delete exhibitor
  delete: async (id: string): Promise<void> => {
    try {
      await axios.delete(`${API_URL}/exhibitors/${id}`, {
        headers: getAdminHeaders()
      });
    } catch (error: any) {
      throw new Error(error.response?.data?.error || error.message || 'Failed to delete exhibitor');
    }
  },

  // Resend credentials email
  resendCredentials: async (id: string): Promise<{ success: boolean; message: string; recipient: string }> => {
    try {
      const response = await axios.post(`${API_URL}/exhibitors/${id}/resend-credentials`, {}, {
        headers: getAdminHeaders()
      });
      return {
        success: response.data.success,
        message: response.data.message,
        recipient: response.data.data?.email || ''
      };
    } catch (error: any) {
      throw new Error(error.response?.data?.error || error.message || 'Failed to resend credentials');
    }
  },

  // Test email config
  testEmailService: async (): Promise<any> => {
    try {
      const response = await axios.post(`${API_URL}/exhibitors/test-email`, {}, {
        headers: getAdminHeaders()
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.error || error.message || 'Email test failed');
    }
  }
};

/* =========================================================
   EXHIBITOR PORTAL AUTH API
 ========================================================= */

export const authAPI = {
  // Login exhibitor
  login: async (email: string, password: string): Promise<{ token: string; exhibitor: Exhibitor }> => {
    try {
      const response = await axios.post(`${API_URL}/auth/exhibitor/login`, {
        email: email.toLowerCase().trim(),
        password
      });
      if (response.data.success && response.data.data) {
        return response.data.data;
      }
      throw new Error(response.data.error || 'Login failed');
    } catch (error: any) {
      throw new Error(error.response?.data?.error || error.message || 'Invalid email or password');
    }
  },

  // Get profile
  getProfile: async (): Promise<Exhibitor> => {
    try {
      const response = await axios.get(`${API_URL}/auth/exhibitor/profile`, {
        headers: getExhibitorHeaders()
      });
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.error || error.message || 'Unauthorized');
    }
  },

  logout: (): void => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('exhibitor_token');
      localStorage.removeItem('exhibitor_data');
    }
  }
};

/* =========================================================
   EXHIBITOR PORTAL DASHBOARD API
 ========================================================= */

export interface DashboardData {
  exhibitor: {
    id: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    boothNumber: string;
    status: string;
  };
  invoices: Array<{
    id: string;
    invoiceNumber: string;
    amount: number;
    status: string;
    dueDate?: string;
  }>;
  requirements: Array<{
    id: string;
    type: string;
    description: string;
    status: string;
  }>;
  floorPlan?: {
    name: string;
    floor: string;
  };
  event?: {
    name: string;
    venue: string;
    exhibitionDay: string;
    dismantleDay: string;
  };
}

export const dashboardAPI = {
  // Get exhibitor portal dashboard layout details
  getLayout: async (): Promise<DashboardData> => {
    try {
      const response = await axios.get(`${API_URL}/exhibitorDashboard/layout`, {
        headers: getExhibitorHeaders()
      });
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.error || error.message || 'Failed to fetch dashboard data');
    }
  }
};

/* =========================================================
   PASSWORD RESET API
 ========================================================= */

export const passwordResetAPI = {
  requestReset: async (email: string): Promise<{ message: string }> => {
    try {
      const response = await axios.post(`${API_URL}/auth/exhibitor/forgot-password`, { email });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.error || error.message || 'Failed to request reset');
    }
  },
  resetPassword: async (token: string, newPassword: string): Promise<{ message: string }> => {
    try {
      const response = await axios.post(`${API_URL}/auth/exhibitor/reset-password-with-token`, { token, password: newPassword });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.error || error.message || 'Failed to reset password');
    }
  }
};

export default exhibitorsAPI;
