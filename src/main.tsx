import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './pages/Layout.tsx'
const Home = React.lazy(() => import("./pages/Home.tsx"));
const Login = React.lazy(() => import('./pages/Login.tsx'));
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from './store.ts'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: '/Login',
        element: <Login />
      },
      {
        path: '/Home',
        element: <Home />
      },
      {
        path: '/*',
        element: <Layout />
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
