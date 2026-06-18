import React from 'react';
import { ExpoRoot } from 'expo-router';

export default function App() {
  // Bridge require.context to the mobile app directory
  const ctx = require.context('./packages/mobile/app');
  return <ExpoRoot context={ctx} />;
}
