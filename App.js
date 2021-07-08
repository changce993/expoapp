import React from 'react';
import { StatusBar } from 'expo-status-bar';
import BreadNavigator from './navigation/BreadNavigator';

export default function App() {
  return (
    <>
      <BreadNavigator />
      <StatusBar style="auto" />
    </>
  );
}
