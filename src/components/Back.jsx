import React from 'react'
import Header from './Header'
import Secpe from './Secpe'
import Checkbx from './Checkbx'
import Shortans from './Shortans'
import Paragrf from './Paragrf'
import Dropdwn from './Dropdwn'
import Uplod from './Uplod'
import Linearsc from './Linearsc'
import Mulcolgrid from './Mulcolgrid'
import Tickbxgrd from './Tickbxgrd'

const Back = () => {
  return (
    <>
    <div id="back" className='bg-indigo-200 h-[150rem] w-[95rem] flex flex-col items-center z-10 p-[10px]'>
        <Header></Header>
        <Secpe></Secpe>
        <Checkbx></Checkbx>
        <Shortans></Shortans>
        <Paragrf></Paragrf>
        <Dropdwn></Dropdwn>
        <Uplod></Uplod>
        <Linearsc></Linearsc>
        <Mulcolgrid></Mulcolgrid>
        <Tickbxgrd></Tickbxgrd>

        <div>

        <button className='h-[2rem] w-[5rem] mr-[24rem] bg-indigo-800 text-white mt-3 rounded-sm'>Submit</button>
        
        <a href="" className='text-blue-800'>Clear Forms</a>
        </div>
       

    </div>

    </>
  )
}

export default Back