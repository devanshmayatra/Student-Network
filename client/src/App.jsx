import React from 'react'
import { useState } from 'react'
import { Navbar } from './components/Navbar.jsx'
import { Blog } from './pages/Blog.jsx'
import { Home } from './pages/Home.jsx'
import { FileSHare } from './pages/FIle_Share.jsx'
import { Members } from './pages/Members.jsx'
import { Footer } from './components/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import { Register } from './pages/Register.jsx'
import { Login } from './pages/Login.jsx'
import axios from 'axios'
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from '../context/userContext.jsx'

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials = true

// Another method for routing

// import { createBrowserRouter , RouterProvider } from 'react-router-dom'
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<><Navbar/><Home/><Footer/></>
//   },
//   {
//     path:'/blog',
//     element:<><Navbar/><Blog/><Footer/></>
//   },
//   {
//     path:'/file_share',
//     element:<><Navbar/><FileSHare/><Footer/></>
//   },
//   {
//     path:'/members',
//     element:<><Navbar/><Members/><Footer/></>
//   }
// ])

export const App = () => {
  const [loggedIn, setLoggedin] = useState(true);

  return (
    <div className='app'>
      <UserContextProvider>
        <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
          <Route path="/blog" element={<><Navbar /><Blog /><Footer /></>} />
          <Route path="/file_share" element={<><Navbar /><FileSHare /><Footer /></>} />
          <Route path="/members" element={<><Navbar /><Members /><Footer /></>} />
        </Routes>
      </UserContextProvider>

      {/* <RouterProvider router = {router}/> */}
    </div>
  )
}
