import React from 'react'

const Header = () => {
  return (
    <>
    <div id="header" className='bg-white h-[14rem] w-[35rem] z-20 rounded-md border-t-8 border-indigo-500'>

      <h1 className='text-[25px] ml-4 mt-3'>Assignment Task</h1>

      <br />

      <hr />

      <p className='text-sm ml-4 mt-3 '><b>.......@gmail.com</b>{" "} <span><a href="" className='text-blue-800'>Switch Account</a></span> <img src="" alt="" /> </p>

      <p className='text-xs p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere unde, reiciendis nobis inventore reprehenderit officiis odit iste pariatur natus suscipit at quia! Voluptatibus tempore cum placeat doloribus excepturi temporibus delectus.</p>

      <hr />

      <span className="before:content-['*'] after:ml-0.5 after:text-red-500 block text-red-600 mb-4 text-xs px-4 py-2">
    Indicates Required Question
         </span>

    </div>
    </>
  )
}

export default Header