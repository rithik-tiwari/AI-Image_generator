import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import { logo } from './assets';
import { logogyan } from './assets';
import { Home, CreatePost } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-black sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to="/">
          <img src={logogyan}  alt="logo" className='w-28 object-contain' />
        </Link>
        <Link to="/create-post" className='font-inter font-medium bg-[#1c23f5] text-white px-4 py-2 rounded-md'>Create</Link>

      </header>
      <main className='flex justify-center items-center  sm:p-8 px-4 py-8 w-full bg-[#000000] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </main>
      <footer className='w-full flex justify-between items-center pt-20 pb-10 bg-black sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <div>
           <Link to="https://www.linkedin.com/in/gyanendra-tiwari-b65079252" target='_blank' className='font-inter font-medium bg-[#1c23f5] text-white px-4 py-2 rounded-full hover:text-black'>LinkedIn</Link>
           <Link to="https://github.com/rithik-tiwari" target='_blank' className='ml-5 font-inter font-medium bg-[#4b1370] text-white px-4 py-2 rounded-full hover:text-black'>Github</Link>
        </div>
        <Link to="/">
          <img src={logogyan}  alt="logo" className='w-28 object-contain' />
        </Link>

      </footer>
    </BrowserRouter>
  )
}

export default App
