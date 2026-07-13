// lib/api/financial.ts
import { ApiResponse } from '@/lib/types';

export interface Invoice {
  id: string;
  invoiceNumber: string;
  exhibitorName: string;
  companyName: string;
  amount: number;
  dueDate: string;
  status: 'paid' | 'pending' | 'overdue';
  createdAt: string;
  items: Array<{ description: string; quantity: number; unitPrice: number; total: number }>;
}

export interface Payment {
  id: string;
  invoiceNumber: string;
  companyName: string;
  amount: number;
  status: 'success' | 'failed' | 'pending';
  method: string;
  transactionId: string;
  createdAt: string;
}

const getMockInvoices = (): Invoice[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem('mock_invoices');
  if (stored) return JSON.parse(stored);
  
  const seed: Invoice[] = [
    {
      id: 'inv-1',
      invoiceNumber: 'INV-2026-001',
      exhibitorName: 'John Doe',
      companyName: 'ALFERT, LLP',
      amount: 45000,
      dueDate: '2026-08-15',
      status: 'paid',
      createdAt: new Date().toISOString(),
      items: [
        { description: 'Premium Space Booth booking (6m x 6m)', quantity: 1, unitPrice: 36000, total: 36000 },
        { description: 'Electrical Socket Connection load setup', quantity: 1, unitPrice: 9000, total: 9000 }
      ]
    },
    {
      id: 'inv-2',
      invoiceNumber: 'INV-2026-002',
      exhibitorName: 'Jane Smith',
      companyName: 'ALPER FRIGO LOGISTICS',
      amount: 12000,
      dueDate: '2026-09-01',
      status: 'pending',
      createdAt: new Date().toISOString(),
      items: [
        { description: 'Standard Stall Setup rental (6m x 3m)', quantity: 1, unitPrice: 10000, total: 10000 },
        { description: 'Shift-wise Cleaning crew charges', quantity: 1, unitPrice: 2000, total: 2000 }
      ]
    }
  ];
  
  localStorage.setItem('mock_invoices', JSON.stringify(seed));
  return seed;
};

const saveMockInvoices = (invoices: Invoice[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('mock_invoices', JSON.stringify(invoices));
  }
};

const getMockPayments = (): Payment[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem('mock_payments');
  if (stored) return JSON.parse(stored);
  
  const seed: Payment[] = [
    {
      id: 'pay-1',
      invoiceNumber: 'INV-2026-001',
      companyName: 'ALFERT, LLP',
      amount: 45000,
      status: 'success',
      method: 'UPI/NetBanking',
      transactionId: 'TXN983248109',
      createdAt: new Date().toISOString()
    }
  ];
  
  localStorage.setItem('mock_payments', JSON.stringify(seed));
  return seed;
};

const saveMockPayments = (payments: Payment[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('mock_payments', JSON.stringify(payments));
  }
};

export const financialAPI = {
  // Invoices
  invoices: {
    getAll: async (params: any = {}) => {
      // TODO: Connect to backend API: GET /invoices
      let invs = getMockInvoices();
      if (params.search) {
        const q = params.search.toLowerCase();
        invs = invs.filter(i => 
          i.companyName.toLowerCase().includes(q) || 
          i.invoiceNumber.toLowerCase().includes(q)
        );
      }
      return { success: true, data: invs };
    },

    getById: async (id: string) => {
      const invs = getMockInvoices();
      const found = invs.find(i => i.id === id);
      if (!found) throw new Error('Invoice not found');
      return { success: true, data: found };
    },

    create: async (data: any) => {
      const invs = getMockInvoices();
      const newInvoice: Invoice = {
        id: 'inv-' + Math.random().toString(36).substring(2, 9),
        invoiceNumber: 'INV-2026-' + Math.floor(100 + Math.random() * 900),
        exhibitorName: data.exhibitorName || 'Unknown Exhibitor',
        companyName: data.companyName || 'Unknown Company',
        amount: Number(data.amount) || 0,
        dueDate: data.dueDate || new Date().toISOString().split('T')[0],
        status: data.status || 'pending',
        createdAt: new Date().toISOString(),
        items: data.items || []
      };
      invs.push(newInvoice);
      saveMockInvoices(invs);
      return { success: true, data: newInvoice };
    },

    update: async (id: string, data: any) => {
      const invs = getMockInvoices();
      const idx = invs.findIndex(i => i.id === id);
      if (idx === -1) throw new Error('Invoice not found');
      const updated = { ...invs[idx], ...data };
      invs[idx] = updated;
      saveMockInvoices(invs);
      return { success: true, data: updated };
    },

    delete: async (id: string) => {
      const invs = getMockInvoices();
      const filtered = invs.filter(i => i.id !== id);
      saveMockInvoices(filtered);
      return { success: true, data: null };
    },

    getStats: async () => {
      const invs = getMockInvoices();
      const paid = invs.filter(i => i.status === 'paid').length;
      const pending = invs.filter(i => i.status === 'pending').length;
      return {
        success: true,
        data: {
          total: invs.length,
          paid,
          pending,
          paidAmount: invs.filter(i => i.status === 'paid').reduce((sum, i) => sum + i.amount, 0),
          pendingAmount: invs.filter(i => i.status === 'pending').reduce((sum, i) => sum + i.amount, 0)
        }
      };
    },

    generatePDF: async (id: string) => {
      // Mock returning blob
      console.log(`Generating mock PDF blob for invoice ${id}`);
      return new Blob(['Mock Invoice PDF Content'], { type: 'application/pdf' });
    },

    sendEmail: async (id: string) => {
      return { success: true, message: `Invoice email successfully sent for invoice ${id}` };
    }
  },

  // Payments
  payments: {
    getAll: async (params: any = {}) => {
      // TODO: Connect to backend API: GET /payments
      let pays = getMockPayments();
      if (params.search) {
        const q = params.search.toLowerCase();
        pays = pays.filter(p => p.companyName.toLowerCase().includes(q) || p.invoiceNumber.toLowerCase().includes(q));
      }
      return { success: true, data: pays };
    },

    getById: async (id: string) => {
      const pays = getMockPayments();
      const found = pays.find(p => p.id === id);
      if (!found) throw new Error('Payment records not found');
      return { success: true, data: found };
    },

    create: async (data: any) => {
      const pays = getMockPayments();
      const newPayment: Payment = {
        id: 'pay-' + Math.random().toString(36).substring(2, 9),
        invoiceNumber: data.invoiceNumber || 'INV-2026-999',
        companyName: data.companyName || 'Unknown Company',
        amount: Number(data.amount) || 0,
        status: data.status || 'success',
        method: data.method || 'Credit Card',
        transactionId: data.transactionId || 'TXN' + Math.floor(100000000 + Math.random() * 900000000),
        createdAt: new Date().toISOString()
      };
      pays.push(newPayment);
      saveMockPayments(pays);
      
      // Auto-update invoice status to paid if payment succeeds
      const invs = getMockInvoices();
      const invIdx = invs.findIndex(i => i.invoiceNumber === newPayment.invoiceNumber);
      if (invIdx !== -1) {
        invs[invIdx].status = 'paid';
        saveMockInvoices(invs);
      }

      return { success: true, data: newPayment };
    },

    updateStatus: async (id: string, status: 'success' | 'failed' | 'pending') => {
      const pays = getMockPayments();
      const idx = pays.findIndex(p => p.id === id);
      if (idx === -1) throw new Error('Payment not found');
      pays[idx].status = status;
      saveMockPayments(pays);
      return { success: true, data: pays[idx] };
    },

    refund: async (id: string) => {
      return { success: true, message: `Refund processed successfully for transaction ${id}` };
    },

    getStats: async () => {
      const pays = getMockPayments();
      return {
        success: true,
        data: {
          total: pays.length,
          successful: pays.filter(p => p.status === 'success').length,
          totalCollected: pays.filter(p => p.status === 'success').reduce((sum, p) => sum + p.amount, 0)
        }
      };
    }
  },

  // Revenue Analytics
  revenue: {
    getSummary: async (timeRange = 'month') => {
      // TODO: Connect to backend API: GET /revenue/summary
      return {
        success: true,
        data: {
          timeRange,
          totalRevenue: 2450000,
          growthRate: 15.4,
          invoicesPaid: 68,
          activeSubscriptions: 42
        }
      };
    },

    getBySector: async () => {
      return {
        success: true,
        data: [
          { sector: 'Automobile', amount: 950000 },
          { sector: 'Technology', amount: 800000 },
          { sector: 'Manufacturing', amount: 500000 },
          { sector: 'Retail', amount: 200000 }
        ]
      };
    },

    getGrowth: async (periods = 12) => {
      return {
        success: true,
        data: [
          { period: 'Jan', amount: 150000 },
          { period: 'Feb', amount: 180000 },
          { period: 'Mar', amount: 210000 },
          { period: 'Apr', amount: 190000 },
          { period: 'May', amount: 260000 },
          { period: 'Jun', amount: 310000 }
        ].slice(0, periods)
      };
    },

    getTopSources: async (limit = 5) => {
      return {
        success: true,
        data: [
          { source: 'Direct Booking', amount: 1450000 },
          { source: 'Sponsorship Packages', amount: 600000 },
          { source: 'Extra Utilities Shell Schema', amount: 400000 }
        ].slice(0, limit)
      };
    },

    getDashboardMetrics: async () => {
      return {
        success: true,
        data: {
          totalRevenue: 2450000,
          growthRate: 12.8,
          invoicesIssued: 85,
          invoicesPaid: 68,
          pendingPaymentsCount: 17
        }
      };
    },

    getForecast: async (months = 6) => {
      return {
        success: true,
        data: [
          { month: 'Jul Forecast', amount: 350000 },
          { month: 'Aug Forecast', amount: 380000 },
          { month: 'Sep Forecast', amount: 420000 }
        ].slice(0, months)
      };
    }
  }
};
