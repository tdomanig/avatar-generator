import React from 'react';
import {AppRouter} from './app-router'
import { QueryClient,QueryClientProvider} from 'react-query';
import './App.css'
import { MantineProvider } from '@mantine/core';
const queryClient=new QueryClient()
function App() {
  return (
    <MantineProvider theme={{colorScheme:'dark'}}>
      <QueryClientProvider client={queryClient}>
      <AppRouter/>
    </QueryClientProvider>
    </MantineProvider>
   
   
  );
}

export default App;
