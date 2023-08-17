import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
        <div className='flex col-span-1'>
        <img 
        className='h-8'
        src="https://cdn2.iconfinder.com/data/icons/most-useful-icons-4/50/HAMBURGER_MENU-512.png"
         alt="hamburger-logo" />
        <img  
        className='mx-2 h-9'
        src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg"
         alt="youtube-logo" />
        </div>

         <div className='flex col-span-10 px-10'>
            <input className='w-1/2 p-2 border border-gray-400 rounded-l-full' type="text"  />
            <button className='px-5 py-2 bg-gray-300 border border-gray-400 rounded-r-full'>🔍</button>
         </div>

         <div className='flex col-span-1'>
            <img className='h-9'
            src="https://th.bing.com/th/id/OIP.bX-8LbnoPfPJsWD7ZeVPVgHaHa?pid=ImgDet&w=512&h=512&rs=1"
            alt="user-logo" />
         </div>
    </div>
  )
}

export default Head