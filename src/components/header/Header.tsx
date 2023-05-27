import React from 'react'
interface Props {
  title: string
}
const Header = (Props : Props) => {
  return (
    <div className=' mb-6 p-3 bg-white rounded-lg flex justify-between items-center'>
        <div className='text-[18px] font-bold' >{Props.title}</div>
        <div className='flex'> 
          <div className='flex flex-col text-[14px] items-end text-gray-400' >
            <div>General manager</div>
            <div>admin</div>
          </div>

          <div className='mx-2 bg-steelblue-100 rounded-full w-fit text-white font-bold py-1 px-3 text-[22px] ' >
            G
          </div>
          <img src='/iconmore.svg' alt="" />
        </div>
      </div>
  )
}

export default Header