import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Nav = ({ show, setshow }) => {
  function handlechange() {
    console.log("clicked");
    setshow(!show);
    console.log(show)
  }
  return (
    <div>
      <nav className={`flex ${show ? "flex-col" : "flex"}    justify-between text-center bg-[#F9FAFB] text-gray-800 items-center`} >
        <div className='flex justify-between w-full'>
          <Link className={`flex  gap-2 justify-center items-center`} to="/"><img width={50} src="/logo3.png" alt="logo" />
            <p>Live-Sync</p>
          </Link>
          <img onClick={handlechange} className='md:hidden w-14  cursor-pointer pr-4' src="menu.png" alt="" />
        </div>
        <ul className={`${show ? " flex-col" : "hidden"} md:flex list-none mt-1 gap-7 mr-5`}>
          <li className='m-2'><Link to="/Installation" className='hover:underline'>Installation Guide</Link></li>
          <li className=' flex hover: text-shadow-amber-50 w-50 border-2 py-1 px-3 rounded-lg hover:shadow-[2px_2px_3px_1px_black] bg-black text-white'><a className='flex' target='_blank' href="https://github.com/Niranjana593/Live-Sync/releases/tag/v1.0.2">
            <img className='w-[20%] h-[70%] m-auto' src="windows.png" alt="" /> Download for window</a></li>
          <li className='hover: text-shadow-amber-50 w-50 border-2 py-1 px-3 rounded-lg hover:shadow-[2px_2px_3px_1px_black] bg-black text-white'><a className='flex justify-center items-center' target='_blank' href="https://github.com/Niranjana593/Live-Sync/releases/tag/v1.0.3(mac2)Live-Sync"><img className='mt-2 w-[20%] h-[70%] m-auto' src="apple.png" alt="" />Download for Mac</a></li>
          <li className='pr-7 hover: text-shadow-amber-50 w-50 border-2 py-1 px-3 rounded-lg hover:shadow-[2px_2px_3px_1px_black] bg-black text-white'><a className='flex' target='_blank' href="https://github.com/Niranjana593/Live-Sync/releases/tag/v1.0.0(linux)Live-Sync"><img className='mt-2 w-[20%] h-[70%] m-auto' src="linux.png" alt="" />Download for Linux</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
