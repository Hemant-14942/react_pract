import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'

//  const router  = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App/>}>
//       <Route path="home" element={<Home/>}/>
//       <Route path="*" element={<div>Not Found</div>} />
//     </Route>
//   )
//  )
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Renders OTP verification page at root
  },
  {
    path: "/home",
    element: <Home />, // Render Home page when /home is accessed
  },
  {
    path: "*",
    element: <div>Not Found</div>, // Catch-all for any invalid paths
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
