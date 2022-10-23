import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Routes } from './src/routes';

import { defaultTheme } from './src/styles/theme/default';

import { Loading } from './src/components/Loading';

import { AuthProvider } from './src/hooks/auth';

export default function App() {
  const [fontsLoaded] = useFonts({ Lato_400Regular, Lato_700Bold });
  
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar style="auto" />

      <AuthProvider>
        <QueryClientProvider client={queryClient}>

          {fontsLoaded ? <Routes /> : <Loading />}
        </QueryClientProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}


