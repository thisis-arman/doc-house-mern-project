import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import router from './Routes/Route.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ErrorBoundary } from './Components/ErrorBoundary'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className='bg-[#E8E9F1] '>
          <ErrorBoundary fallback={<p className='text-center text-4xl  p-10'>Something went wrong.We will Fixed it Soon</p>}>
            <RouterProvider router={router} />
          </ErrorBoundary>

        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
