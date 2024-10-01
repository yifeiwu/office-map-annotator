import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ReadOnlyViewer from './pages/ReadOnlyViewer.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/view', element: <ReadOnlyViewer /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
