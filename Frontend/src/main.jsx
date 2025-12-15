import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SignUp } from './components/SignUp.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
 <>
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/TaskManager' element={<App/>}/>
    </>
  
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
