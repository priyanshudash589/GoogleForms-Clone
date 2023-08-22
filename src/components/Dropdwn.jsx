import React from 'react'

const Dropdwn = () => {
  return (
    <>
    <div id="dropdown" className='bg-white h-[8rem] w-[35rem] mt-3 rounded-md p-5'>

    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-RobF font-cust mb-4">
    Drop down
         </span>

         <select id="menu" name="menu" className='w-[9rem] h-[2rem] px-2  border-2 border-black'>
         <option value="option1" className='w-[9rem] h-[4rem]'> Choose </option>
    <option value="option2" className='w-[9rem] h-[4rem]'>Option 1</option>
    <option value="option3" className='w-[9rem] h-[4rem]'>Option 2</option>
    <option value="option4" className='w-[9rem] h-[4rem]'>Option 3</option>
  </select>

    </div>
    </>
  )
}

export default Dropdwn