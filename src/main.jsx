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


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className='bg-[#E8E9F1]'>
          <RouterProvider router={router} /></div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
