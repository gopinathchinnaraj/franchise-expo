import { Exhibitor } from "./api/exhibitors";

// Get token from localStorage
export const getToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('exhibitor_token');
  }
  return null;
};

// Get exhibitor data from localStorage
export const getExhibitorData = (): Exhibitor | null => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem('exhibitor_data');
    return data ? JSON.parse(data) : null;
  }
  return null;
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  return !!getToken();
};

// Logout function
export const logout = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('exhibitor_token');
    localStorage.removeItem('exhibitor_data');
    window.location.href = '/login';
  }
};

// Make authenticated API calls (Mocked)
export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  // TODO: Implement backend authenticated fetch
  console.log(`[Mock Fetch] Auth call to: ${url}`);
  return new Response(JSON.stringify({ success: true }));
};

// Update profile (Mocked)
export const updateProfile = async (data: any) => {
  // TODO: Put to backend profile API
  if (typeof window !== 'undefined') {
    const current = getExhibitorData();
    if (current) {
      const updated = { ...current, ...data };
      localStorage.setItem('exhibitor_data', JSON.stringify(updated));
      return { success: true, data: updated };
    }
  }
  return { success: true, data };
};

// Change password (Mocked)
export const changePassword = async (currentPassword: string, newPassword: string) => {
  // TODO: Post to backend change-password API
  console.log('Changing password (mocked)', { currentPassword, newPassword });
  return { success: true, message: 'Password changed successfully' };
};

// Get exhibitor profile (Mocked)
export const getProfile = async () => {
  // TODO: Get from backend profile API
  const current = getExhibitorData();
  return { success: true, data: current };
};
