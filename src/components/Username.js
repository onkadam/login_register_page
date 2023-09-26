import React from 'react'

export default function Username() {
  return (
    <div className='container mx-auto'>
      <div className="flex justify-center items-center h-screen">
       <div className='title flex flex-col item-center'>
        <h4 className='text-5xl font-bold'>
          Hello Again!
        </h4>
        <span className='py-4 text-xl w-2/3 text-center text-gray-500'>My name is Onkar Kadam</span>
       </div>
       <form className='py-1'>
        <div className='profile flex justify-center py-4'>
           <img src="" alt="avatar"/>
        </div>
       </form>
      </div>
    </div>
  )
}
