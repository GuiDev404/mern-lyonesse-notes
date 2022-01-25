import React from 'react'
import AppRoute from './routes/AppRouter'
import AuthProvider from './context/AuthProvider'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false
    },
  },
});

function App() {

  return (
    <QueryClientProvider client={queryClient}>  
      <AuthProvider>
        <AppRoute />
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
