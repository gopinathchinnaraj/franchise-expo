// lib/api/tokenManager.ts

class TokenManager {
  private token: string | null = null;
  private readonly TOKEN_KEY = 'admin_token';

  constructor() {
    this.initialize();
  }

  private initialize() {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem(this.TOKEN_KEY);
      if (storedToken) {
        this.token = storedToken;
      }
    }
  }

  setToken(token: string | null) {
    this.token = token;
    if (typeof window !== 'undefined') {
      if (token) {
        localStorage.setItem(this.TOKEN_KEY, token);
      } else {
        localStorage.removeItem(this.TOKEN_KEY);
      }
    }
  }

  getToken() {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem(this.TOKEN_KEY);
      if (storedToken !== this.token) {
        this.token = storedToken;
      }
    }
    return this.token;
  }

  clearToken() {
    this.setToken(null);
  }

  isAuthenticated() {
    const token = this.getToken();
    return !!token;
  }
}

export const tokenManager = new TokenManager();
export default tokenManager;
