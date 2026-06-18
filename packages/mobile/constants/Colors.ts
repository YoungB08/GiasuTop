import { Platform } from 'react-native';

export const Colors = {
  primary: '#1565C0', // Xanh dương chủ đạo
  secondary: '#42A5F5', // Xanh dương nhạt cho gradient
  background: '#F0F6FC', // Nền xanh xám nhạt như hình 1
  surface: '#FFFFFF', // Màu card trắng
  text: {
    primary: '#1E293B', // Chữ tối
    secondary: '#64748B', // Chữ xám
    muted: '#94A3B8', // Chữ nhạt
  },
  accent: '#FF9800', // Màu cam nổi bật (rating, hot badge)
  success: '#4CAF50', // Xanh lá
  error: '#EF5350', // Đỏ
  border: '#E2E8F0', // Đường viền
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const Radius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 20,
  xl: 24,
};

export function getShadow(x = 0, y = 2, opacity = 0.08, radius = 4) {
  return Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: x, height: y },
      shadowOpacity: opacity,
      shadowRadius: radius,
    },
    android: {
      elevation: radius * 1.5,
    },
    default: {},
  });
}
