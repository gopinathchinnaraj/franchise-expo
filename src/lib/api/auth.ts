import axios from 'axios';
import { ApiResponse } from '@/lib/types';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  status: string;
  phone?: string;
  createdAt?: string;
  lastLogin?: string;
}

export interface AuthData {
  token: string;
  user: User;
}

const API_URL = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/+$/, '').replace(/\/api$/, '') + '/api';

// Helper to get auth header
const getAuthHeader = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('admin_token');
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  return {};
};

export const authAPI = {
  // Admin login connected to backend
  login: async (email: string, password: string): Promise<ApiResponse<AuthData>> => {
    try {
      console.log('🔐 [API] Attempting login for:', email);
      const response = await axios.post(`${API_URL}/auth/login`, {
        email: email.toLowerCase().trim(),
        password
      });
      return response.data;
    } catch (error: any) {
      console.error('❌ [API] Login failed:', error);
      return {
        success: false,
        error: error.response?.data?.error || error.response?.data?.message || error.message || 'Invalid email or password'
      };
    }
  },

  // Admin logout
  logout: async (): Promise<ApiResponse> => {
    try {
      const response = await axios.post(`${API_URL}/auth/logout`, {}, {
        headers: getAuthHeader()
      });
      return response.data;
    } catch (error: any) {
      console.error('❌ [API] Logout failed:', error);
      return {
        success: false,
        error: error.response?.data?.error || error.message || 'Logout failed'
      };
    }
  },

  // Refresh token
  refreshToken: async (): Promise<ApiResponse<{ token: string }>> => {
    try {
      const response = await axios.post(`${API_URL}/auth/refresh-token`, {}, {
        headers: getAuthHeader()
      });
      return response.data;
    } catch (error: any) {
      console.error('❌ [API] Refresh token failed:', error);
      return {
        success: false,
        error: error.response?.data?.error || error.message || 'Refresh token failed'
      };
    }
  },

  // Get current user profile
  getProfile: async (): Promise<ApiResponse<User>> => {
    try {
      const response = await axios.get(`${API_URL}/auth/profile`, {
        headers: getAuthHeader()
      });
      return response.data;
    } catch (error: any) {
      console.error('❌ [API] Get profile failed:', error);
      return {
        success: false,
        error: error.response?.data?.error || error.message || 'Failed to fetch profile'
      };
    }
  },

  // Debug: Check admin user (mocked or debug endpoints if any)
  checkAdmin: async (): Promise<ApiResponse> => {
    return { success: true, message: 'Admin verified' };
  },

  // Debug: Reset admin password
  resetAdmin: async (): Promise<ApiResponse> => {
    return { success: true, message: 'Admin password reset is handled via createAdmin script' };
  },

  // Debug: Get all routes
  getRoutes: async (): Promise<ApiResponse> => {
    return { success: true, data: [] };
  }
};
