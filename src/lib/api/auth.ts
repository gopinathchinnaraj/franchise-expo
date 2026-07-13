// lib/api/auth.ts
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

export const authAPI = {
  // Admin login with mock credentials
  login: async (email: string, password: string): Promise<ApiResponse<AuthData>> => {
    // TODO: Connect to backend authentication API: POST /api/auth/login
    console.log('🔐 [Mock Login] Attempting login with:', { email });
    
    if (email === 'admin@example.com' && password === 'admin123') {
      const mockData: AuthData = {
        token: 'mock_admin_token_' + Date.now(),
        user: {
          id: 'admin-1',
          email: 'admin@example.com',
          name: 'Expo Administrator',
          role: 'admin',
          status: 'active',
          phone: '+91 99999 88888',
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString()
        }
      };
      return { success: true, data: mockData };
    }
    
    return {
      success: false,
      error: 'Invalid email or password. Use demo credentials: admin@example.com / admin123'
    };
  },

  // Admin logout
  logout: async (): Promise<ApiResponse> => {
    // TODO: Connect to backend logout API: POST /api/auth/logout
    return { success: true, message: 'Logged out successfully' };
  },

  // Refresh token
  refreshToken: async (): Promise<ApiResponse<{ token: string }>> => {
    // TODO: Connect to backend refresh token API: POST /api/auth/refresh-token
    return { success: true, data: { token: 'mock_admin_token_refreshed' } };
  },

  // Get current user profile
  getProfile: async (): Promise<ApiResponse<User>> => {
    // TODO: Connect to backend profile API: GET /api/auth/profile
    const mockUser: User = {
      id: 'admin-1',
      email: 'admin@example.com',
      name: 'Expo Administrator',
      role: 'admin',
      status: 'active',
    };
    return { success: true, data: mockUser };
  },

  // Debug: Check admin user
  checkAdmin: async (): Promise<ApiResponse> => {
    return { success: true, message: 'Admin verified (Mock)' };
  },

  // Debug: Reset admin password
  resetAdmin: async (): Promise<ApiResponse> => {
    return { success: true, message: 'Admin password reset to admin123 (Mock)' };
  },

  // Debug: Get all routes
  getRoutes: async (): Promise<ApiResponse> => {
    return { success: true, data: [] };
  }
};
