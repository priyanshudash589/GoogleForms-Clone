import React from 'react'

const Linearsc = () => {
  return (
    <>
    <div id="linearscale" className='bg-white h-[8rem] w-[35rem] mt-3 rounded-md p-5'>

    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-RobF font-cust mb-4">
Linear Scale
     </span>
         
         <div className='flex flex-row  ml-[57px] mb-3'>

            

            <div className='grid grid-row-5 grid-flow-col gap-x-8'>

                <div className="row-span-3">1</div>
                <div className="row-span-3">2</div>
                <div className="row-span-3">3</div>
                <div className="row-span-3">4</div>
                <div className="row-span-3">5</div>

            </div>
            

            

         </div>

         <div className='flex flex-row'>

<h4 className='mr-4'>Worst</h4>

<div className='grid grid-row-5 grid-flow-col gap-x-7'>

    <div className="row-span-3"><input type="radio" name="" id="" /></div>
    <div className="row-span-3"><input type="radio" name="" id="" /></div>
    <div className="row-span-3"><input type="radio" name="" id="" /></div>
    <div className="row-span-3"><input type="radio" name="" id="" /></div>
    <div className="row-span-3"><input type="radio" name="" id="" /></div>

</div>

<h4 className='ml-4'>Best</h4>

</div>

         

    </div>
    </>
  )
}

export default Linearsc