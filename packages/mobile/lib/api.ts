import AsyncStorage from '@react-native-async-storage/async-storage';

// Sử dụng IP trong LAN từ screenshot để chạy trên điện thoại thật
export const API_BASE = 'http://192.168.1.6:5000/api';

export async function getAuthHeaders() {
  const token = await AsyncStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
  };
}

export async function fetchJSON<T = any>(endpoint: string, options?: RequestInit): Promise<{ success: boolean; data?: T; message?: string }> {
  try {
    const headers = await getAuthHeaders();
    const res = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers: {
        ...headers,
        ...options?.headers,
      },
    });
    
    const json = await res.json();
    return json;
  } catch (error: any) {
    console.error(`API Error on ${endpoint}:`, error);
    return { success: false, message: 'Không thể kết nối đến máy chủ API.' };
  }
}
