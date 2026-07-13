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

export const exhibitorsAPI = {
  // Get all exhibitors with filters and search
  getAll: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
    sector?: string;
    status?: string;
  }): Promise<PaginatedResponse<Exhibitor>> => {
    // TODO: Connect to backend API: GET /exhibitors
    console.log('📡 [Mock API] Fetching exhibitors with params:', params);
    
    let db = getMockDatabase();
    
    if (params?.search) {
      const q = params.search.toLowerCase();
      db = db.filter(item => 
        item.name.toLowerCase().includes(q) ||
        item.email.toLowerCase().includes(q) ||
        item.company.toLowerCase().includes(q)
      );
    }
    
    if (params?.sector) {
      db = db.filter(item => item.sector === params.sector);
    }
    
    if (params?.status) {
      db = db.filter(item => item.status === params.status);
    }
    
    const page = params?.page || 1;
    const limit = params?.limit || 10;
    const total = db.length;
    const totalPages = Math.ceil(total / limit);
    const startIdx = (page - 1) * limit;
    const paginatedData = db.slice(startIdx, startIdx + limit);
    
    return {
      success: true,
      data: paginatedData,
      pagination: {
        total,
        page,
        limit,
        totalPages
      }
    };
  },

  // Get single exhibitor by ID
  getById: async (id: string): Promise<{ success: boolean; data: Exhibitor }> => {
    // TODO: Connect to backend API: GET /exhibitors/:id
    const db = getMockDatabase();
    const found = db.find(item => item.id === id);
    if (!found) {
      throw new Error('Exhibitor not found');
    }
    return { success: true, data: found };
  },

  // Get stats
  getStats: async (): Promise<ExhibitorStats> => {
    // TODO: Connect to backend API: GET /exhibitors/stats
    const db = getMockDatabase();
    
    const statusCounts: Record<string, number> = { active: 0, pending: 0, inactive: 0 };
    const sectorCounts: Record<string, number> = {};
    
    db.forEach(item => {
      statusCounts[item.status] = (statusCounts[item.status] || 0) + 1;
      sectorCounts[item.sector] = (sectorCounts[item.sector] || 0) + 1;
    });
    
    return {
      total: db.length,
      byStatus: Object.entries(statusCounts).map(([_id, count]) => ({ _id, count })),
      bySector: Object.entries(sectorCounts).map(([_id, count]) => ({ _id, count }))
    };
  },

  // Create exhibitor
  create: async (data: CreateExhibitorData): Promise<Exhibitor & { originalPassword: string }> => {
    // TODO: Connect to backend API: POST /exhibitors
    const db = getMockDatabase();
    
    const newExhibitor: Exhibitor = {
      id: 'ex-' + Math.random().toString(36).substring(2, 9),
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      sector: data.sector,
      booth: data.boothNumber || 'Not assigned',
      boothNumber: data.boothNumber,
      boothSize: data.boothSize || '',
      boothType: data.boothType || 'standard',
      boothDimensions: data.boothDimensions || '',
      boothNotes: data.boothNotes || '',
      status: data.status || 'pending',
      createdAt: new Date().toISOString(),
      originalPassword: data.password
    };
    
    db.push(newExhibitor);
    saveMockDatabase(db);
    
    return {
      ...newExhibitor,
      originalPassword: data.password
    };
  },

  // Update exhibitor
  update: async (id: string, data: Partial<CreateExhibitorData>): Promise<Exhibitor> => {
    // TODO: Connect to backend API: PUT /exhibitors/:id
    const db = getMockDatabase();
    const idx = db.findIndex(item => item.id === id);
    if (idx === -1) {
      throw new Error('Exhibitor not found');
    }
    
    const updated: Exhibitor = {
      ...db[idx],
      ...data,
      booth: data.boothNumber || db[idx].booth,
      boothNumber: data.boothNumber || db[idx].boothNumber,
      boothSize: data.boothSize || db[idx].boothSize,
      boothType: data.boothType || db[idx].boothType,
      boothDimensions: data.boothDimensions || db[idx].boothDimensions,
      boothNotes: data.boothNotes || db[idx].boothNotes,
    };
    
    db[idx] = updated;
    saveMockDatabase(db);
    return updated;
  },

  // Bulk update exhibitor status
  bulkUpdateStatus: async (ids: string[], status: string): Promise<{ affectedCount: number }> => {
    // TODO: Connect to backend API: POST /exhibitors/bulk/update-status
    const db = getMockDatabase();
    let count = 0;
    
    const updated = db.map(item => {
      if (ids.includes(item.id)) {
        count++;
        return { ...item, status };
      }
      return item;
    });
    
    saveMockDatabase(updated);
    return { affectedCount: count };
  },

  // Delete exhibitor
  delete: async (id: string): Promise<void> => {
    // TODO: Connect to backend API: DELETE /exhibitors/:id
    const db = getMockDatabase();
    const filtered = db.filter(item => item.id !== id);
    saveMockDatabase(filtered);
  },

  // Resend credentials email
  resendCredentials: async (id: string): Promise<{ success: boolean; message: string; recipient: string }> => {
    const db = getMockDatabase();
    const found = db.find(item => item.id === id);
    if (!found) throw new Error('Exhibitor not found');
    return {
      success: true,
      message: `Credentials resent to ${found.email}`,
      recipient: found.email
    };
  },

  // Test email config
  testEmailService: async (): Promise<any> => {
    return { success: true, message: 'Email service configured properly (Mock)' };
  }
};

/* =========================================================
   EXHIBITOR PORTAL AUTH API
========================================================= */

export const authAPI = {
  // Login exhibitor
  login: async (email: string, password: string): Promise<{ token: string; exhibitor: Exhibitor }> => {
    // TODO: Connect to backend API: POST /auth/exhibitor/login
    console.log('🔐 [Mock Exhibitor Login] Attempting login:', email);
    
    const db = getMockDatabase();
    const found = db.find(item => item.email.toLowerCase() === email.toLowerCase());
    
    // Allow any demo exhibitor or exhibitor in local db
    if (found) {
      const token = 'mock_exhibitor_token_' + Date.now();
      if (typeof window !== 'undefined') {
        localStorage.setItem('exhibitor_token', token);
        localStorage.setItem('exhibitor_data', JSON.stringify(found));
      }
      return { token, exhibitor: found };
    }
    
    // Provide a default fallback login
    if (email === 'exhibitor@example.com' && password === 'password123') {
      const defaultExhibitor: Exhibitor = {
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
        status: 'active',
        createdAt: new Date().toISOString()
      };
      
      const token = 'mock_exhibitor_token_' + Date.now();
      if (typeof window !== 'undefined') {
        localStorage.setItem('exhibitor_token', token);
        localStorage.setItem('exhibitor_data', JSON.stringify(defaultExhibitor));
      }
      return { token, exhibitor: defaultExhibitor };
    }

    throw new Error('Invalid email or password. Use demo credentials: exhibitor@example.com / password123');
  },

  // Get profiles
  getProfile: async (): Promise<Exhibitor> => {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem('exhibitor_data');
      if (data) return JSON.parse(data);
    }
    throw new Error('Unauthorized');
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

interface DashboardData {
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
  // Get exhibitor portal dashboard layout details - MOCKED
  getLayout: async (): Promise<DashboardData> => {
    // TODO: Connect to backend API: GET /exhibitorDashboard/layout
    console.log('📡 [Mock API] Fetching exhibitor dashboard layout');
    
    let exhibitorData: any = null;
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem('exhibitor_data');
      if (data) {
        exhibitorData = JSON.parse(data);
      }
    }
    
    if (!exhibitorData) {
      exhibitorData = {
        id: 'ex-1',
        name: 'John Doe',
        company: 'ALFERT, LLP',
        email: 'exhibitor@example.com',
        phone: '+91 98765 43210',
        boothNumber: 'B8103',
        status: 'active'
      };
    }
    
    return {
      exhibitor: {
        id: exhibitorData.id,
        name: exhibitorData.name,
        company: exhibitorData.company,
        email: exhibitorData.email,
        phone: exhibitorData.phone,
        boothNumber: exhibitorData.boothNumber || 'B8103',
        status: exhibitorData.status || 'active'
      },
      invoices: [
        { id: 'inv-1', invoiceNumber: 'INV-2026-001', amount: 45000, status: 'paid', dueDate: '2026-08-15' },
        { id: 'inv-2', invoiceNumber: 'INV-2026-002', amount: 12000, status: 'pending', dueDate: '2026-09-01' }
      ],
      requirements: [
        { id: 'req-1', type: 'furniture', description: '3 Chairs, 1 Round Table', status: 'approved' },
        { id: 'req-2', type: 'electrical', description: '5KW power supply socket', status: 'pending' },
        { id: 'req-3', type: 'water', description: 'Direct inlet water feed', status: 'pending' }
      ],
      floorPlan: {
        name: 'Hall 3 Logistics Segment',
        floor: 'Ground Floor'
      },
      event: {
        name: 'DIEMEX 2026',
        venue: 'Pune Auto Cluster Exhibition Center',
        exhibitionDay: '8th October, 2026',
        dismantleDay: '10th October, 2026'
      }
    };
  }
};

/* =========================================================
   PASSWORD RESET API
========================================================= */

export const passwordResetAPI = {
  requestReset: async (email: string): Promise<{ message: string }> => {
    // TODO: Connect to backend API: POST /auth/exhibitor/forgot-password
    return { message: `Reset link successfully sent to ${email}` };
  },
  resetPassword: async (token: string, newPassword: string): Promise<{ message: string }> => {
    // TODO: Connect to backend API: POST /auth/exhibitor/reset-password
    return { message: 'Password reset successfully' };
  }
};

export default exhibitorsAPI;
