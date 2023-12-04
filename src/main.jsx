import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Login } from './views/login.jsx'
import { Layout } from './components/Layout.jsx'
import { SignUp } from './views/SignUp.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
  path: '/',
  Component: Layout,
  children: [
    {
      path: 'login',
      element: <Login/>
    },
    {
      path: 'signup',
      element: SignUp
    },
    {
      path: "",
      element: <App/>
  },
  ]
}
])
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
