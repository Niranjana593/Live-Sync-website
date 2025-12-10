import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav className='flex w-screen justify-between text-center bg-[#F9FAFB] text-gray-800 items-center '>
        <div className='flex gap-2 justify-center items-center'><img width={50} src="/logo3.png" alt="logo" />
            <p>Live-Sync</p>
        </div>
        <ul className='list-none flex gap-7 mr-5'>
          <li className='hover: text-shadow-amber-50'><a target='_blank' href="#">Usage</a></li>
          <li className='hover: text-shadow-amber-50'><a target='_blank' href="https://github.com/Niranjana593/Live-Sync/releases/tag/v1.0.2">Download for window</a></li>
          <li className='hover: text-shadow-amber-50'><a target='_blank' href="https://github.com/Niranjana593/Live-Sync/releases/tag/v1.0.3(mac2)Live-Sync">Download for Mac</a></li>
          <li className='hover: text-shadow-amber-50'><a target='_blank' href="#">Download for Linux</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
