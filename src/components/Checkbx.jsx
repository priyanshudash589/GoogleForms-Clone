import React from 'react'

const Checkbx = () => {
  return (
    <>
    <div id="checkbox" className='bg-white h-[12rem] w-[35rem] mt-3 rounded-md p-5'>

    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-RobF font-cust mb-4">
    Checkbox
  </span>

  <input type="checkbox" id="male" name="gender" value="male" className='mb-4'/>{" "}<span className='text-sm'>Option 1</span><br />
        <input type="checkbox" id="male" name="gender" value="male"className='mb-4'/>{" "}<span className='text-sm'>Option 2</span><br />
        <input type="checkbox" id="male" name="gender" value="male"className='mb-4'/>{" "}<span className='text-sm'>Option 3</span>

    </div>
    </>
  )
}

export default Checkbx