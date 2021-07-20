import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { StatusBar } from 'expo-status-bar';
import BreadNavigator from './navigation/BreadNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <BreadNavigator />
      <StatusBar style="auto" />
    </Provider>
  );
};
