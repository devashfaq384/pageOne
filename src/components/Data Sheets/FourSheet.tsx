import React from 'react'

const FourSheet = () => {

    const waterData  = [
        {
            title: 'a. Wells'
        },
        {
            title: 'b. Springs'
        },
        {
            title: 'c. Surface/Rivers'
        },
        {
            title: 'd. Bulk Purchase'
        },
        {
            title: 'Total'
        },
    ]
    const waterDatam3  = [
        {
            title: '1. Gravity'
        },
        {
            title: '2. Pumped'
        },
        {
            title: 'Sub Total'
        },
        {
            title: 'b. External Source/s'
        },
        {
            title: 'Total'
        },
    ]

    const WaterProduct =[
        {
            heading : '6.3 WATER PRODUCT COST',
            subheadings : [
                {
                    title : 'a. Total Power Consumption for pumping(KW-Hr)'
                },
                {
                    title : 'b. Total power cost for pumping(PHP)'
                },
                {
                    title : 'c. Other energy cost (Oil,etc)(PHP)'
                },
                {
                    title : 'd. Total pumping hours (motor drive)'
                },
                {
                    title : 'e. Total pumping hours (engine drive)'
                },
                {
                    title : 'f. Total Chlorine consumed (Kg.)'
                },
                {
                    title : 'g. Total Chlorine cost (PHP)'
                },
                {
                    title : 'h. Total cost of other chemicals (PHP)'
                },
                {
                    title : 'Total Production cost'
                },
            ]
        },
        {
            heading : "6.4 ACCOUNTED FOR WATER",
            subheadings : [
                {   
                    title : "a. Total Billed Metered Consumption"
                },
                {   
                    title : "Residential"
                },
                {   
                    title : "Government"
                },
                {   
                    title : "Commercial/Industrial (Total)"
                },
                {   
                    title : "Full Commercial"
                },
                {   
                    title : "Commercial A"
                },
                {   
                    title : "Commercial B"
                },
                {   
                    title : "Commercial C"
                },
                {   
                    title : "Commercial D"
                },
                {   
                    title : "Bulk/Wholesale"
                },
                {   
                    title : "b. Unmetered Billed"
                },
                {   
                    title : "c.Total Billed"
                },
            ]
        }
    ]

  return (
    <div className=' bg-gray-100 rounded-lg p-4 text-gray-600 border border-solid border-gray-400 py-3 text-[15px]' > 
        <div className='pl-20 my-3' >b.Net income Ratio </div>
                    <div className='grid grid-cols-12 my-4' >
                        <div className='col-span-5 text-center flex items-center justify-center gap-5' >
                            <div>
                                <div className='border-b border-solid border-gray-400'>Net income Loss</div>
                                <div>Total Revenues</div>
                            </div>
                        </div>
                        <div className='col-span-4 gap-10 flex items-center justify-center' >
                             <div>
                                <div className='border-b border-solid border-gray-400'>2,853,112.24</div>
                                <div>41,047,565.72</div>
                             </div>
                                <div>=</div>
                                <div>0.07</div>
                        </div>
                        <div className='col-span-3 gap-10 flex items-center justify-center' >
                             <div>
                                <div className='border-b border-solid border-gray-400'>37,520,847.46</div>
                                <div>39,602,148.42</div>
                             </div>
                                <div>=</div>
                                <div>0.07</div>
                        </div>
                    </div>
                    <div className='pl-20 my-3' >c. Current Ratio {`(benchmark =≤1.5)`} </div>
                    <div className='grid grid-cols-12 my-4' >
                        <div className='col-span-5 text-center flex items-center justify-center gap-5' >
                            <div>
                                <div className='border-b border-solid border-gray-400'>Current Assets</div>
                                <div>Current Liabilities</div>
                            </div>
                        </div>
                        <div className='col-span-4 gap-10 flex items-center justify-center' >
                             
                        </div>
                        <div className='col-span-3 gap-10 flex items-center justify-center' >
                             <div>
                                <div className='border-b border-solid border-gray-400'>271,948,214.66</div>
                                <div>54,172,363.85</div>
                             </div>
                                <div>=</div>
                                <div>5.02</div>
                        </div>
                    </div>



                {/* Water production data */}

                <div className='font-bold' >6. WATER PRODUCTION DATA</div>
                <div className='grid grid-cols-12 py-4' >
                    <div className='font-bold col-span-4 pl-10 ' >6.1 SOURCE OF SUPPLY</div>
                    <div className='col-span-8 text-center' ><u>Total Rated Capacity</u></div>
                </div>

                <div className='grid grid-cols-12' >
                    <div className='col-span-4' ></div>
                    <div className='col-span-2 text-center' ><u>Number</u></div>
                    <div className='col-span-2 text-center' ><u>{`(in LPS)`}</u></div>
                    <div className='col-span-2 text-center' ><u>{`(in Cum/Mo)`}</u></div>
                    <div className='col-span-2 text-center' ><u>Basics of Data</u></div>
                </div>
                {waterData.map((item)=>{
                    return(
                        <div key={item.title} className='grid grid-cols-12 gap-4' >
                            <div className={`col-span-4 mt-2 pl-12 ${item.title  === "Total" ? 'text-center' : ' '} `} >
                                {item.title  }
                            </div>
                            <div className='col-span-2 mt-1' >
                                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                            </div>
                            <div className='col-span-2 mt-1' >
                                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                            </div>
                            <div className='col-span-2 mt-1' >
                                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                            </div>
                            {
                                item.title === "Total" ? null :
                            <div className='col-span-2 mt-1' >
                                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                            </div>
                            }
                        </div>
                    )
                })}
            <div className='font-bold pl-10' >6.2 WATER PRODUCTION {`(m3)`}</div>
                <div className='grid grid-cols-12 pl-12 my-4' >
                    <div className='col-span-4' >a.WD-Owned Sources</div>
                    <div className='col-span-2 text-center' ><u>This Month</u></div>
                    <div className='col-span-2 text-center' ><u>Year-to Date</u></div>
                    <div className='col-span-2 text-center' ><u>Method of Measurement</u></div>
                </div>
                {waterDatam3.map((item)=>{
                    return(
                        <div key={item.title} className='grid grid-cols-12 gap-4' >
                            <div className={`col-span-4 mt-2 pl-12 ${item.title  === "Total" ? 'text-center' : ' '} ${item.title  === "Sub Total" ? 'text-center' : ' '} `} >
                                {item.title  }
                            </div>
                            <div className='col-span-2 mt-1' >
                                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                            </div>
                            {item.title === "Total" ? null :
                            <div className='col-span-2 mt-1' >
                                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                            </div>
                            }
                            {item.title === "Sub Total" ? null :
                            <div className='col-span-2 mt-1' >
                                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                            </div>
                            }
                            
                        </div>
                    )
                })}

<div className='my-4 text-[15px]' >
            <div className='grid grid-cols-12 pt-4' >
                <div className='col-span-6' ></div>
                <div className='col-span-3 pl-6 ' > <u>This Month</u> </div>
                <div className='col-span-2 ' > <u>Year-to-Date</u> </div>
            </div>
            
            
            {WaterProduct.map((item)=>{
                return(
                    <div className='ml-4' >
                        <div className={`font-bold mt-4 `} >{item.heading}</div>
                            {
                                item.subheadings.map((sub)=>{
                                    return(
                                        <div className='grid grid-cols-12 gap-3' >
                                            <div className={`col-span-6 mt-2 pl-8 ${sub.title === "Total" || sub.title.includes('1') || sub.title.includes('2') || sub.title.includes('3') || sub.title.includes('4') || sub.title.includes('5') || sub.title.includes('6') ? 'ml-7' : ' ' } `} >{sub.title}</div>
                                            <div className='col-span-2 mt-2' >
                                                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                                            </div>
                                            <div className='col-span-2 mt-2' >
                                                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                                            </div>
                                        </div>
                                        )
                                })
                            }
                    </div>

                )
            })}
        </div>
                    
    </div>
  )
}

export default FourSheet