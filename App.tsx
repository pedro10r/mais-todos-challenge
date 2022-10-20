import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { Routes } from './src/routes';

import { defaultTheme } from './src/styles/theme/default';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar style="auto" />
      
      <Routes />
    </ThemeProvider>
  );
}


