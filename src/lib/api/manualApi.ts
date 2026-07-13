// lib/api/manualApi.ts
export interface Manual {
  id: string;
  title: string;
  description: string;
  category: string;
  version: string;
  file_path: string;
  file_name: string;
  file_size: string;
  mime_type: string;
  last_updated: string;
  updated_by: string;
  downloads: number;
  status: 'published' | 'draft';
  metadata?: any;
  type?: 'pdf' | 'section';
}

export interface ManualFilters {
  category?: string;
  search?: string;
  status?: string;
}

export interface ManualStatistics {
  totalManuals: number;
  publishedManuals: number;
  draftManuals: number;
  totalDownloads: number;
  categoryStats: Array<{ category: string; count: number }>;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  count?: number;
}

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}


const getMockManuals = (): Manual[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem('mock_manuals');
  if (stored) return JSON.parse(stored);
  
  const seed: Manual[] = [
    {
      id: 'man-1',
      title: 'Exhibition Rules & Guidelines 2026',
      description: 'Official rules, regulations, setup codes and safety instructions for all participants.',
      category: 'rules',
      version: '1.0',
      file_path: '/documents/rules.pdf',
      file_name: 'rules_and_regulations_2026.pdf',
      file_size: '2.4 MB',
      mime_type: 'application/pdf',
      last_updated: new Date().toISOString(),
      updated_by: 'Admin',
      downloads: 45,
      status: 'published',
      type: 'pdf'
    },
    {
      id: 'man-2',
      title: 'Stall Setup Instructions',
      description: 'Step-by-step guidance for installing shell schema or raw space booths.',
      category: 'setup',
      version: '1.2',
      file_path: '/documents/setup_guide.pdf',
      file_name: 'stall_setup_manual.pdf',
      file_size: '1.8 MB',
      mime_type: 'application/pdf',
      last_updated: new Date().toISOString(),
      updated_by: 'Admin',
      downloads: 29,
      status: 'published',
      type: 'pdf'
    }
  ];
  
  localStorage.setItem('mock_manuals', JSON.stringify(seed));
  return seed;
};

const saveMockManuals = (manuals: Manual[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('mock_manuals', JSON.stringify(manuals));
  }
};

class ManualApi {
  private baseURL: string;

  constructor() {
    this.baseURL = 'https://mock-api.local';
  }

  // Get all manuals (combines text sections and PDFs)
  async getManuals(filters?: ManualFilters): Promise<ApiResponse<Manual[]>> {
    // TODO: Connect to backend API: GET /api/manuals/admin/all
    let manuals = getMockManuals();
    
    if (filters?.category && filters.category !== 'all') {
      manuals = manuals.filter(m => m.category === filters.category);
    }
    
    if (filters?.search) {
      const q = filters.search.toLowerCase();
      manuals = manuals.filter(m => 
        m.title.toLowerCase().includes(q) || 
        m.description.toLowerCase().includes(q)
      );
    }
    
    if (filters?.status) {
      manuals = manuals.filter(m => m.status === filters.status);
    }
    
    return {
      success: true,
      data: manuals
    };
  }

  // Get single manual by ID
  async getManual(id: string): Promise<ApiResponse<Manual>> {
    const manuals = getMockManuals();
    const found = manuals.find(m => m.id === id);
    if (!found) {
      throw new ApiError(404, 'Manual not found');
    }
    return {
      success: true,
      data: found
    };
  }

  // Get statistics
  async getStatistics(): Promise<ApiResponse<ManualStatistics>> {
    const manuals = getMockManuals();
    const published = manuals.filter(m => m.status === 'published').length;
    const downloads = manuals.reduce((sum, m) => sum + m.downloads, 0);
    
    const catCounts: Record<string, number> = {};
    manuals.forEach(m => {
      catCounts[m.category] = (catCounts[m.category] || 0) + 1;
    });

    return {
      success: true,
      data: {
        totalManuals: manuals.length,
        publishedManuals: published,
        draftManuals: manuals.length - published,
        totalDownloads: downloads,
        categoryStats: Object.entries(catCounts).map(([category, count]) => ({ category, count }))
      }
    };
  }

  // Create manual (for PDF uploads)
  async createManual(formData: FormData): Promise<ApiResponse<Manual>> {
    const title = (formData.get('title') as string) || 'New Upload';
    const description = (formData.get('description') as string) || '';
    const category = (formData.get('category') as string) || 'general';
    const status = (formData.get('status') as 'published' | 'draft') || 'published';
    
    const manuals = getMockManuals();
    const newManual: Manual = {
      id: 'man-' + Math.random().toString(36).substring(2, 9),
      title,
      description,
      category,
      version: '1.0',
      file_path: '#',
      file_name: 'uploaded_document.pdf',
      file_size: '1.2 MB',
      mime_type: 'application/pdf',
      last_updated: new Date().toISOString(),
      updated_by: 'Admin',
      downloads: 0,
      status,
      type: 'pdf'
    };
    
    manuals.push(newManual);
    saveMockManuals(manuals);
    
    return {
      success: true,
      data: newManual
    };
  }

  // Create text section
  async createSection(data: { title: string; content: string; category: string }): Promise<ApiResponse<Manual>> {
    const manuals = getMockManuals();
    const newSection: Manual = {
      id: 'man-' + Math.random().toString(36).substring(2, 9),
      title: data.title,
      description: data.content.substring(0, 100) + '...',
      category: data.category,
      version: '1.0',
      file_path: '',
      file_name: '',
      file_size: '',
      mime_type: 'text/html',
      last_updated: new Date().toISOString(),
      updated_by: 'Admin',
      downloads: 0,
      status: 'published',
      type: 'section',
      metadata: { content: data.content }
    };
    
    manuals.push(newSection);
    saveMockManuals(manuals);
    
    return {
      success: true,
      data: newSection
    };
  }

  // Update manual
  async updateManual(id: string, formData: FormData): Promise<ApiResponse<Manual>> {
    const title = (formData.get('title') as string);
    const description = (formData.get('description') as string);
    const category = (formData.get('category') as string);
    
    const manuals = getMockManuals();
    const idx = manuals.findIndex(m => m.id === id);
    if (idx === -1) throw new Error('Manual not found');
    
    const updated = {
      ...manuals[idx],
      title: title || manuals[idx].title,
      description: description || manuals[idx].description,
      category: category || manuals[idx].category,
      last_updated: new Date().toISOString()
    };
    
    manuals[idx] = updated;
    saveMockManuals(manuals);
    
    return {
      success: true,
      data: updated
    };
  }

  // Update section
  async updateSection(id: string, data: { title: string; content: string; category: string }): Promise<ApiResponse<Manual>> {
    const manuals = getMockManuals();
    const idx = manuals.findIndex(m => m.id === id);
    if (idx === -1) throw new Error('Section not found');
    
    const updated = {
      ...manuals[idx],
      title: data.title,
      description: data.content.substring(0, 100) + '...',
      category: data.category,
      last_updated: new Date().toISOString(),
      metadata: { content: data.content }
    };
    
    manuals[idx] = updated;
    saveMockManuals(manuals);
    
    return {
      success: true,
      data: updated
    };
  }

  // Delete manual
  async deleteManual(id: string): Promise<ApiResponse<null>> {
    const manuals = getMockManuals();
    const filtered = manuals.filter(m => m.id !== id);
    saveMockManuals(filtered);
    return { success: true, data: null };
  }

  // Delete section
  async deleteSection(id: string): Promise<ApiResponse<null>> {
    return this.deleteManual(id);
  }

  // Bulk delete manuals
  async bulkDeleteManuals(ids: string[]): Promise<ApiResponse<null>> {
    const manuals = getMockManuals();
    const filtered = manuals.filter(m => !ids.includes(m.id));
    saveMockManuals(filtered);
    return { success: true, data: null };
  }

  // Bulk delete sections
  async bulkDeleteSections(ids: string[]): Promise<ApiResponse<null>> {
    return this.bulkDeleteManuals(ids);
  }

  // Download manual
  async downloadManual(id: string): Promise<{ success: boolean; downloadUrl?: string }> {
    console.log(`📥 Downloading manual ${id} (Mocked)`);
    const manuals = getMockManuals();
    const idx = manuals.findIndex(m => m.id === id);
    if (idx !== -1) {
      manuals[idx].downloads++;
      saveMockManuals(manuals);
    }
    alert('Mock Download: ' + (manuals[idx]?.file_name || 'manual.pdf') + ' downloaded successfully!');
    return { success: true };
  }

  // Preview manual
  async previewManual(id: string): Promise<void> {
    const manuals = getMockManuals();
    const found = manuals.find(m => m.id === id);
    alert('Mock Preview: Open ' + (found?.title || 'Document') + ' in new tab');
  }

  // Update manual status
  async updateManualStatus(id: string, status: 'published' | 'draft'): Promise<ApiResponse<Manual>> {
    const manuals = getMockManuals();
    const idx = manuals.findIndex(m => m.id === id);
    if (idx === -1) throw new Error('Manual not found');
    
    const updated = {
      ...manuals[idx],
      status,
      last_updated: new Date().toISOString()
    };
    
    manuals[idx] = updated;
    saveMockManuals(manuals);
    
    return {
      success: true,
      data: updated
    };
  }

  // Get manuals by category
  async getManualsByCategory(category: string): Promise<ApiResponse<Manual[]>> {
    const manuals = getMockManuals().filter(m => m.category === category);
    return {
      success: true,
      data: manuals
    };
  }

  // Search manuals
  async searchManuals(query: string): Promise<ApiResponse<Manual[]>> {
    const q = query.toLowerCase();
    const manuals = getMockManuals().filter(m => 
      m.title.toLowerCase().includes(q) || 
      m.description.toLowerCase().includes(q)
    );
    return {
      success: true,
      data: manuals
    };
  }

  // Get recent manuals
  async getRecentManuals(limit: number = 5): Promise<ApiResponse<Manual[]>> {
    const manuals = getMockManuals().slice(0, limit);
    return {
      success: true,
      data: manuals
    };
  }
}

const manualApi = new ManualApi();
export default manualApi;
