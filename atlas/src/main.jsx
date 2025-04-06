import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,Route,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'
import Country from './pages/Country.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>} >
      <Route path="home" element={<Home/>}/>
      <Route path="about" element={<About/>} />
      <Route path="contacts" element={<Contacts/>} />
      <Route path="country" element={<Country/>} />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )

);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
