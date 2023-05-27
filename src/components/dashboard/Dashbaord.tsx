import React from 'react'
import Box from './Box'
import Graph from './Graph'
import Header from '../header/Header'

const Dashbaord = () => {
  return (
    <div className='m-4' >
      {/* heder  */}
      <Header title='Dashboard' ></Header>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6' >
          <div className='rounded-lg bg-steelblue-100  p-3 flex justify-end'>
            <img src="/emoji.png" className='h-24 mt-4' alt="" />
            <div className='mt-3 text-center flex flex-col items-center '>
              <div className='bg-white rounded-full w-[80%] text-center px-4 py-2 text-sm font-bold' >Monthly Data Report</div>
              <div className='mt-7' >
                <div className='text-[16px] text-white' >General Santos City Water District</div>
                <div className='text-[12px] text-white' > <u> gscwaterdistrict@yahoo.com </u> </div>
              </div>
            </div>
          </div>
          <Box></Box>
      </div>
      </div>
  )
}

export default Dashbaord