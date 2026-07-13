// lib/api/dashboard.ts
import { ApiResponse } from '@/lib/types';

// Visitor data with full analytics
export interface VisitorData {
  total: number;
  today: number;
  week: number;
  month?: number;
  source?: string;
  last7Days?: Array<{ date: string; count: number }>;
  pages?: Array<{ page: string; views: number }>;
  devices?: Array<{ device: string; count: number }>;
  locations?: Array<{ location: string; count: number }>;
}

// Exhibitor stats from API
export interface ExhibitorStatsData {
  total: number;
  active: number;
  pending: number;
  approved: number;
  rejected: number;
  inactive: number;
  newThisWeek: number;
  bySector: Array<{ sector: string; count: number }>;
}

// User stats
export interface UserStatsData {
  total: number;
  active: number;
  inactive: number;
  admins: number;
  editors: number;
  viewers: number;
  newThisWeek: number;
}

// Revenue data
export interface RevenueData {
  totalRevenue: number;
  monthRevenue: number;
  pendingAmount: number;
  invoices?: {
    total: number;
    paid: number;
    pending: number;
  };
}

// Articles data
export interface ArticlesData {
  total: number;
  published: number;
  recent: Array<{
    id: number;
    title: string;
    views: number;
    status: string;
  }>;
}

// Full dashboard summary
export interface DashboardSummary {
  users?: UserStatsData;
  exhibitors?: ExhibitorStatsData;
  visitors?: VisitorData;
  revenue?: RevenueData;
  articles?: ArticlesData;
  activities?: Array<{
    id: number;
    action: string;
    user: string;
    time: string;
  }>;
}

export const dashboardAPI = {
  // Get full dashboard summary from your API - MOCKED
  getSummary: async (): Promise<{ success: boolean; data?: DashboardSummary; error?: string }> => {
    // TODO: Connect to backend API: GET /api/dashboard/summary
    const mockSummary: DashboardSummary = {
      users: {
        total: 12,
        active: 10,
        inactive: 2,
        admins: 3,
        editors: 5,
        viewers: 4,
        newThisWeek: 1
      },
      exhibitors: {
        total: 85,
        active: 60,
        pending: 12,
        approved: 60,
        rejected: 5,
        inactive: 8,
        newThisWeek: 4,
        bySector: [
          { sector: 'Automobile', count: 25 },
          { sector: 'Technology', count: 30 },
          { sector: 'Manufacturing', count: 18 },
          { sector: 'Retail', count: 12 }
        ]
      },
      visitors: {
        total: 12450,
        today: 430,
        week: 2890,
        month: 12450,
        last7Days: [
          { date: 'Mon', count: 300 },
          { date: 'Tue', count: 400 },
          { date: 'Wed', count: 350 },
          { date: 'Thu', count: 500 },
          { date: 'Fri', count: 450 },
          { date: 'Sat', count: 200 },
          { date: 'Sun', count: 150 }
        ],
        pages: [
          { page: '/home', views: 8500 },
          { page: '/register', views: 3200 },
          { page: '/exhibitors', views: 1800 }
        ],
        devices: [
          { device: 'Desktop', count: 7500 },
          { device: 'Mobile', count: 4200 },
          { device: 'Tablet', count: 750 }
        ],
        locations: [
          { location: 'India', count: 8900 },
          { location: 'United States', count: 1500 },
          { location: 'Germany', count: 800 },
          { location: 'Others', count: 1250 }
        ]
      },
      revenue: {
        totalRevenue: 2450000,
        monthRevenue: 650000,
        pendingAmount: 320000,
        invoices: {
          total: 85,
          paid: 68,
          pending: 17
        }
      },
      articles: {
        total: 18,
        published: 15,
        recent: [
          { id: 1, title: 'DIEMEX Exhibition Opening Soon', views: 1200, status: 'published' },
          { id: 2, title: 'Keynote Speakers Announced', views: 850, status: 'published' },
          { id: 3, title: 'Guide for Exhibitors - Setup Instructions', views: 640, status: 'published' }
        ]
      },
      activities: [
        { id: 1, action: 'Approved exhibitor "ACME Corp"', user: 'Admin', time: '10 mins ago' },
        { id: 2, action: 'Created invoice INV-2026-089', user: 'Editor', time: '1 hour ago' },
        { id: 3, action: 'Visitor registered: John Doe', user: 'System', time: '2 hours ago' },
        { id: 4, action: 'Updated floor plan layout', user: 'Admin', time: '1 day ago' }
      ]
    };

    return {
      success: true,
      data: mockSummary
    };
  },

  // Get exhibitor stats - MOCKED
  getExhibitorStats: async (): Promise<{ success: boolean; data?: ExhibitorStatsData; error?: string }> => {
    // TODO: Connect to backend API: GET /api/exhibitor-stats/count
    return {
      success: true,
      data: {
        total: 85,
        active: 60,
        pending: 12,
        approved: 60,
        rejected: 5,
        inactive: 8,
        newThisWeek: 4,
        bySector: [
          { sector: 'Automobile', count: 25 },
          { sector: 'Technology', count: 30 },
          { sector: 'Manufacturing', count: 18 },
          { sector: 'Retail', count: 12 }
        ]
      }
    };
  },

  // Get visitor stats - MOCKED
  getVisitorStats: async (): Promise<{ success: boolean; data?: VisitorData; error?: string }> => {
    // TODO: Connect to backend API: GET /api/exhibitor-stats/visitor-count
    return {
      success: true,
      data: {
        total: 12450,
        today: 430,
        week: 2890,
        month: 12450,
        last7Days: [
          { date: 'Mon', count: 300 },
          { date: 'Tue', count: 400 },
          { date: 'Wed', count: 350 },
          { date: 'Thu', count: 500 },
          { date: 'Fri', count: 450 },
          { date: 'Sat', count: 200 },
          { date: 'Sun', count: 150 }
        ]
      }
    };
  },

  // Health check - MOCKED
  getHealth: async () => {
    // TODO: Connect to backend API: GET /health
    return {
      success: true,
      status: 'healthy',
      version: '1.0.0-mock'
    };
  }
};
