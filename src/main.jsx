import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Navbar } from './components/Navbar.jsx'
import { Blog } from './Blog.jsx'
import { Home } from './Home.jsx'
import { FileSHare } from './FIle_Share.jsx'
import { Members } from './Members.jsx'
import { Footer } from './components/Footer.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path:'/home',
    element:<><Navbar/><Home/><Footer/></>
  },
  {
    path:'/blog',
    element:<><Navbar/><Blog/><Footer/></>
  },
  {
    path:'/file_share',
    element:<><Navbar/><FileSHare/><Footer/></>
  },
  {
    path:'/members',
    element:<><Navbar/><Members/><Footer/></>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>
)
