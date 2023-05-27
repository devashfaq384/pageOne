import React from 'react'

const SevenSheet = () => {
    const data = [
        {
            name : 'a. Non-Revenue Water (%) - YTD'
        },
        {
            name : 'b. Collection Efficiency (%) - YTD'
        },
        {
            name : 'c. S.Conn Market Growht (%) - YTD'
        },
        {
            name : 'd. Copex (PHP) - YTD'
        },
        {
            name : 'e. LWUA-WD JSA Reserves (%) - YTD'
        },
        {
            name : 'f.1 Water Quality Compliance -Bacti (Y/N)'
        },
        {
            name : 'f.2 Water Quality Compliance -Pychem (Y/N)'
        },
        {
            name : 'f.3 Water Quality Compliance -Bacti (Y/N)'
        },
        {
            name : 'g. Current Ratio - YTD'
        },
        {
            name : 'h. Average Montly Net Income (PHP)'
        },
        {
            name : 'i. Staff Productivity Index'
        },
        {
            name : 'j. 24/7 Water Service (% of Active S Conn)'
        },
        {
            name : 'k. With Sanitation Facilities  (YES or NO)'
        },
    ]

  return (
    <div className='bg-gray-100 rounded-lg pb-10 p-4 text-gray-600 border border-solid border-gray-400 py-3 text-[15px]' >
        <div className={`font-bold mt-4 `} >7. STORAGE FACILITIES</div>
            <div className='grid grid-cols-12' >
                <div className='col-span-6' ></div>
                <div className='col-span-3 text-center'> <u>Actual</u> </div>
                <div className='col-span-3 text-center'> <u>KPI Monitoring Benchmark</u> </div>
            </div>

            {data.map((item)=>{
                return (
                <div key={item.name} className='grid grid-cols-12 gap-3' >
                    <div className={`col-span-5 mt-2 pl-8 `} >{item.name}</div>
                    <div className='col-span-1' ></div>
                    <div className='col-span-3 mt-2' >
                        <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                    </div>
                    <div className='col-span-3 mt-2' >
                        <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                    </div>
                </div>

                )
            })}
    </div>
  )
}

export default SevenSheet