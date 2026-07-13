// lib/api/securityDeposit.service.ts
import { 
  SecurityDeposit, 
  SecurityDepositFormData, 
  SecurityDepositFilters,
  SecurityDepositStats,
  ApiResponse,
  BulkDeleteResponse 
} from '../types/securityDeposit';

const getMockDeposits = (): SecurityDeposit[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem('mock_security_deposits');
  if (stored) return JSON.parse(stored);
  
  const seed: SecurityDeposit[] = [
    { id: 'sd-1', category: '0-36', minSqMtr: 9, maxSqMtr: 36, amountINR: 15000, amountUSD: 200, displayOrder: 1, isActive: true, description: 'Small Booth Deposit' },
    { id: 'sd-2', category: '37-100', minSqMtr: 37, maxSqMtr: 100, amountINR: 35000, amountUSD: 500, displayOrder: 2, isActive: true, description: 'Medium Booth Deposit' },
    { id: 'sd-3', category: '101+', minSqMtr: 101, maxSqMtr: 500, amountINR: 75000, amountUSD: 1000, displayOrder: 3, isActive: true, description: 'Large Island Stand Deposit' }
  ];
  
  localStorage.setItem('mock_security_deposits', JSON.stringify(seed));
  return seed;
};

const saveMockDeposits = (deposits: SecurityDeposit[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('mock_security_deposits', JSON.stringify(deposits));
  }
};

class SecurityDepositService {
  // Get all deposits with optional filters
  async getAllDeposits(filters?: SecurityDepositFilters): Promise<ApiResponse<SecurityDeposit[]>> {
    // TODO: Connect to backend API: GET /api/admin/security-deposit
    let deposits = getMockDeposits();
    if (filters?.isActive && filters.isActive !== 'all') {
      const activeBool = filters.isActive === true || filters.isActive === 'true';
      deposits = deposits.filter(d => d.isActive === activeBool);
    }
    if (filters?.category && filters.category !== 'all') {
      deposits = deposits.filter(d => d.category === filters.category);
    }
    return {
      success: true,
      data: deposits
    };
  }

  // Get active deposits only
  async getActiveDeposits(): Promise<ApiResponse<SecurityDeposit[]>> {
    const deposits = getMockDeposits().filter(d => d.isActive);
    return {
      success: true,
      data: deposits
    };
  }

  // Get single deposit by ID
  async getDepositById(id: string): Promise<ApiResponse<SecurityDeposit>> {
    const deposits = getMockDeposits();
    const found = deposits.find(d => d.id === id);
    if (!found) throw new Error('Deposit option not found');
    return {
      success: true,
      data: found
    };
  }

  // Create new deposit
  async createDeposit(data: SecurityDepositFormData): Promise<ApiResponse<SecurityDeposit>> {
    // TODO: Connect to backend API: POST /api/admin/security-deposit
    const deposits = getMockDeposits();
    const newDeposit: SecurityDeposit = {
      id: 'sd-' + Math.random().toString(36).substring(2, 9),
      category: data.category,
      minSqMtr: Number(data.minSqMtr) || 0,
      maxSqMtr: Number(data.maxSqMtr) || 0,
      amountINR: Number(data.amountINR) || 0,
      amountUSD: Number(data.amountUSD) || 0,
      displayOrder: Number(data.displayOrder) || deposits.length + 1,
      isActive: data.isActive !== undefined ? data.isActive : true,
      description: data.description || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    deposits.push(newDeposit);
    saveMockDeposits(deposits);
    
    return {
      success: true,
      data: newDeposit
    };
  }

  // Update deposit
  async updateDeposit(id: string, data: Partial<SecurityDepositFormData>): Promise<ApiResponse<SecurityDeposit>> {
    // TODO: Connect to backend API: PUT /api/admin/security-deposit/:id
    const deposits = getMockDeposits();
    const idx = deposits.findIndex(d => d.id === id);
    if (idx === -1) throw new Error('Deposit option not found');
    
    const updated: SecurityDeposit = {
      ...deposits[idx],
      category: data.category || deposits[idx].category,
      minSqMtr: data.minSqMtr !== undefined ? Number(data.minSqMtr) : deposits[idx].minSqMtr,
      maxSqMtr: data.maxSqMtr !== undefined ? Number(data.maxSqMtr) : deposits[idx].maxSqMtr,
      amountINR: data.amountINR !== undefined ? Number(data.amountINR) : deposits[idx].amountINR,
      amountUSD: data.amountUSD !== undefined ? Number(data.amountUSD) : deposits[idx].amountUSD,
      displayOrder: data.displayOrder !== undefined ? Number(data.displayOrder) : deposits[idx].displayOrder,
      isActive: data.isActive !== undefined ? data.isActive : deposits[idx].isActive,
      description: data.description !== undefined ? data.description : deposits[idx].description,
      updatedAt: new Date().toISOString()
    };
    
    deposits[idx] = updated;
    saveMockDeposits(deposits);
    
    return {
      success: true,
      data: updated
    };
  }

  // Delete deposit
  async deleteDeposit(id: string): Promise<ApiResponse<null>> {
    // TODO: Connect to backend API: DELETE /api/admin/security-deposit/:id
    const deposits = getMockDeposits();
    const filtered = deposits.filter(d => d.id !== id);
    saveMockDeposits(filtered);
    return { success: true, data: null };
  }

  // Bulk delete deposits
  async bulkDeleteDeposits(ids: string[]): Promise<ApiResponse<BulkDeleteResponse>> {
    // TODO: Connect to backend API: DELETE /api/admin/security-deposit/bulk/delete
    const deposits = getMockDeposits();
    const filtered = deposits.filter(d => !ids.includes(d.id));
    saveMockDeposits(filtered);
    return {
      success: true,
      data: {
        successful: ids,
        failed: []
      }
    };
  }

  // Toggle active status
  async toggleActiveStatus(id: string, isActive: boolean): Promise<ApiResponse<SecurityDeposit>> {
    // TODO: Connect to backend API: PATCH /api/admin/security-deposit/:id/toggle-status
    return this.updateDeposit(id, { isActive });
  }

  // Update display order
  async updateDisplayOrder(updates: Array<{ id: string; displayOrder: number }>): Promise<ApiResponse<BulkDeleteResponse>> {
    const deposits = getMockDeposits();
    const updated = deposits.map(d => {
      const match = updates.find(u => u.id === d.id);
      if (match) {
        return { ...d, displayOrder: match.displayOrder };
      }
      return d;
    });
    saveMockDeposits(updated);
    return {
      success: true,
      data: {
        successful: updates.map(u => u.id),
        failed: []
      }
    };
  }

  // Reorder all deposits
  async reorderDeposits(): Promise<ApiResponse<null>> {
    const deposits = getMockDeposits();
    // Sort by minSqMtr
    const sorted = [...deposits].sort((a, b) => a.minSqMtr - b.minSqMtr);
    const updated = sorted.map((d, index) => ({
      ...d,
      displayOrder: index + 1
    }));
    saveMockDeposits(updated);
    return { success: true, data: null };
  }

  // Get statistics
  async getStatistics(): Promise<ApiResponse<SecurityDepositStats>> {
    // TODO: Connect to backend API: GET /api/admin/security-deposit/statistics
    const deposits = getMockDeposits();
    const active = deposits.filter(d => d.isActive).length;
    
    let sumINR = 0;
    let sumUSD = 0;
    let minINR = deposits.length ? deposits[0].amountINR : 0;
    let maxINR = deposits.length ? deposits[0].amountINR : 0;
    let minUSD = deposits.length ? deposits[0].amountUSD : 0;
    let maxUSD = deposits.length ? deposits[0].amountUSD : 0;
    
    const categoryCount: Record<string, { count: number; inr: number; usd: number }> = {};
    
    deposits.forEach(d => {
      sumINR += d.amountINR;
      sumUSD += d.amountUSD;
      if (d.amountINR < minINR) minINR = d.amountINR;
      if (d.amountINR > maxINR) maxINR = d.amountINR;
      if (d.amountUSD < minUSD) minUSD = d.amountUSD;
      if (d.amountUSD > maxUSD) maxUSD = d.amountUSD;
      
      if (!categoryCount[d.category]) {
        categoryCount[d.category] = { count: 0, inr: 0, usd: 0 };
      }
      categoryCount[d.category].count++;
      categoryCount[d.category].inr += d.amountINR;
      categoryCount[d.category].usd += d.amountUSD;
    });
    
    const stats: SecurityDepositStats = {
      totalDeposits: deposits.length,
      activeDeposits: active,
      inactiveDeposits: deposits.length - active,
      categoryStats: Object.entries(categoryCount).map(([category, info]) => ({
        category,
        count: info.count,
        totalINR: info.inr,
        totalUSD: info.usd
      })),
      priceStats: {
        minINR,
        maxINR,
        avgINR: deposits.length ? sumINR / deposits.length : 0,
        minUSD,
        maxUSD,
        avgUSD: deposits.length ? sumUSD / deposits.length : 0
      }
    };
    
    return {
      success: true,
      data: stats
    };
  }
}

export default new SecurityDepositService();
