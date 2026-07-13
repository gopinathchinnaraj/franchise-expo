// hooks/useExhibitorStats.ts
import { useEffect, useState, useCallback } from 'react';
import { dashboardAPI } from '@/lib/api/dashboard';

export interface ExhibitorStats {
  total: number;
  active: number;
  pending: number;
  approved: number;
  rejected: number;
  inactive: number;
  newThisWeek: number;
  bySector: Array<{ sector: string; count: number }>;
}

export function useExhibitorStats() {
  const [stats, setStats] = useState<ExhibitorStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await dashboardAPI.getExhibitorStats();
      
      if (response.success && response.data) {
        setStats(response.data);
      } else {
        setError(response.error || 'Failed to load exhibitor stats');
      }
    } catch (err: any) {
      console.error('Exhibitor stats fetch error:', err);
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  const refresh = useCallback(() => {
    fetchStats();
  }, [fetchStats]);

  return { 
    stats, 
    isLoading, 
    error, 
    refresh 
  };
}
