import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';
import React from 'react';

// Khởi tạo context chỉ định trực tiếp thư mục app cùng cấp
const ctx = require.context('./app');

export default function App() {
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
