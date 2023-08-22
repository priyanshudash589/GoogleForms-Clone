import React from 'react'

const Mulcolgrid = () => {
  return (
    <>
    <div id="multicol" className='bg-white h-[25rem] w-[35rem] mt-3 rounded-md p-5'>

    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-RobF font-cust mb-4">
Multi choice Grid
     </span>

    <div className='flex flex-row  ml-[12rem] mb-[3rem]'>

            

<div className='grid grid-row-3 grid-flow-col gap-x-12'>

    <div className="row-span-6">Column 1</div>
    <div className="row-span-6">Column 2</div>
    <div className="row-span-6">Column 3</div>

</div>

</div>

<div className='flex flex-row mb-[2rem]'>

<h4 className='mr-[10rem]'>Row 1</h4>

<div className='grid grid-row-3 grid-flow-col gap-x-[7rem]'>

    <div className="row-span-3"><input type="radio" name="" id="" /></div>
    <div className="row-span-3"><input type="radio" name="" id="" /></div>
    <div className="row-span-3"><input type="radio" name="" id="" /></div>    

</div>

</div>

<div className='flex flex-row mb-[2rem]'>

<h4 className='mr-[10rem]'>Row 2</h4>

<div className='grid grid-row-3 grid-flow-col gap-x-[7rem]'>

    <div className="row-span-3"><input type="radio" name="" id="" /></div>
    <div className="row-span-3"><input type="radio" name="" id="" /></div>
    <div className="row-span-3"><input type="radio" name="" id="" /></div>    

</div>

</div>

<div className='flex flex-row '>

<h4 className='mr-[10rem]'>Row 3</h4>

<div className='grid grid-row-3 grid-flow-col gap-x-[7rem]'>

    <div className="row-span-3"><input type="radio" name="" id="" /></div>
    <div className="row-span-3"><input type="radio" name="" id="" /></div>
    <div className="row-span-3"><input type="radio" name="" id="" /></div>    

</div>

</div>
        
        
    </div>
    </>
  )
}

export default Mulcolgrid