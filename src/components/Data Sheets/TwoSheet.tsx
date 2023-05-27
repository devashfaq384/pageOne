import React from 'react'

const TwoSheet = () => {
    const chargeSheet  = [
        {
            name:'Domestic/Government'
        },
        {
            name:'Commercial/Industrial'
        },
        {
            name:'Commercial A'
        },
        {
            name:'Commercial B'
        },
        {
            name:'Commercial C'
        },
        {
            name:'Commercial D'
        },
        {
            name:'Bulk Sales'
        },
    ]
    const Billing = [
        {
            heading : '4.1 BILLING (Water Sales)',
            subheadings : [
                {
                    title : 'a. Current-metered'
                },
                {
                    title : 'b. Current-unmetered'
                },
                {
                    title : 'c. Penalty Charges'
                },
                {
                    title : 'd. Less Senior Citizen & PWD Discount'
                },
                {
                    title : 'Total'
                },
            ]
        },
        {
            heading : '4.2 BILLING PER CONSUMER CLASS',
            subheadings : [
                {
                    title : 'e. Residentail/Domestic'
                },
                {
                    title : 'f. Government'
                },
                {
                    title : 'g. Commercial/Industrial'
                },
                {
                    title : 'h. Bul Wholesale'
                },
                {
                    title : 'Total'
                },
            ]
        },
        {
            heading : '4.3 COLLECTION (Water Sales)',
            subheadings : [
                {
                    title : 'a. Current account'
                },
                {
                    title : 'b. Arrears- current year'
                },
                {
                    title : 'c. Arrears - previous year'
                },
                {
                    title : 'Total'
                },
            ]
        },
    ]


    const formula = [
        {
            title:'4.5 ON-TIME PAID, This Month',
            firstUp : '4.3a',
            firstDown : '(4.1a) + (4.1b) + (4.1c)',
            percentage : '59.3%'
        },
        {
            title:'4.6 COLLECTION EFFICIENCY, Y-T-D',
            firstUp : '4.3a',
            firstDown : '(4.1a) + (4.1b) + (4.1c)',
            secUp : '23,484,895.56',
            secDown : '39,942,172.61',
            percentage : '58.8%'
        },
        {
            title:'4.7 COLLECTION RATIO, Y-T-D',
            firstUp : '4.3a',
            firstDown : '(4.1a) + (4.1b) + (4.1c)',
            secUp : '40,168,039.79',
            secDown : '91,973,151.41',
            percentage : '43.7%'
        },
    ]
    return (
    <div className='bg-gray-100 rounded-lg text-gray-600 border border-solid border-gray-400 p-3' >
        {/* present water rates  */}
        <div>
            <div className='font-bold text-[14px] ' >3.PRESENT WATER RATES</div>
            {/* date approved  */}
            <div className='flex ml-8 my-2 gap-4' >
                <div className='text-sm' >3.1Date Approved {`(mm/dd/year)`}</div>
                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 text-center bg-gray-100 outline-none"/></div>
                <div className='text-sm' > <u> Effictivity{`(mm/dd/year)`}</u></div>
                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className="bg-gray-100 outline-none text-center"/></div>
            </div>
            {/* Water rates  */}
            <div>
                <div>
                    <div className='text-sm ml-8 my-2' >3.2 Water Rates</div>
                    <div className='grid grid-cols-12 text-[14px]' >
                        <div className='col-span-4 flex justify-end mr-4 ' >MINIMUM</div>
                        <div className='col-span-6 text-center  border-b border-solid border-gray-500 ' > COMMODITY CHARGES</div>
                    </div>
                    <div className='mt-4 grid grid-cols-12 gap-1 text-[14px]' >
                        <div className='col-span-3 pl-6' ><u>CLASSIFICATION</u></div>
                        <div className='col-span-1' ><u>CHARGES</u></div>
                        <div className='col-span-1' ><u>11-20 CUM</u></div>
                        <div className='col-span-1' ><u>21-30 CUM</u></div>
                        <div className='col-span-1' ><u>31-40 CUM</u></div>
                        <div className='col-span-1' ><u>41-50 CUM</u></div>
                        <div className='col-span-1' ><u>51-60 CUM</u></div>
                        <div className='col-span-1' ><u>61 & Above</u></div>
                    </div>
                    {/* Charges data is here  */}
                    {chargeSheet.map((item)=>{
                        return(
                            <div key={item.name} className='mt-4 grid grid-cols-12 gap-1 text-[14px]' >
                                <div className='col-span-3 pl-6' >{item.name}</div>
                                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        
        {/* Billing and collection data  */}
        <div className='my-4 text-[15px]' >
            <div className='font-bold text-[14px] ' >4.BILLING AND COLLECTION DATA</div>
            <div className='grid grid-cols-12' >
                <div className='col-span-4' ></div>
                <div className='col-span-4 pl-6' > <u>This Month</u> </div>
                <div className='col-span-4 ' > <u>Year-to-Date</u> </div>
            </div>
            {Billing.map((item)=>{
                return(
                    <div className='ml-4' >
                        <div>{item.heading}</div>
                            {
                                item.subheadings.map((sub)=>{
                                    return(
                                        <div className='grid grid-cols-12 gap-3' >
                                            <div className={`col-span-4 mt-2 pl-8 ${sub.title === "Total" ? 'text-center' : ' ' } `} >{sub.title}</div>
                                            <div className='col-span-3 mt-2' >
                                                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                                            </div>
                                            <div className='col-span-3 mt-2' >
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

            {/* 4.4 is here  */}
        <div className='flex justify-between text-[15px] my-8 ml-4 mr-14' >
            <div>4.4 ACCOUNTS RECEIVABLE-CUSTOMERS{`(Beginning of the Yr.)`}</div>
            <div className='border-b-2 border-solid border-gray-400 w-[40%]' ><input type="text" className=" bg-gray-100 outline-none"/></div>
        </div>
        <div className='flex justify-end' >
            <div className='col-span-3 mx-24 flex justify-start' > <u>This Month</u> </div>
            <div className='col-span-3 mx-24 flex justify-center' > <u>Year-to-Date</u> </div>
        </div>

        {formula.map((item)=>{
            return(
                <div key={item.title} className='text-[15px]' >
                    <div className='grid grid-cols-12 ml-4' >
                        <div className='col-span-6' >{item.title}</div>
                    </div>
                    <div className='grid grid-cols-12 my-4' >
                        <div className='col-span-5 text-center flex items-center justify-center gap-5' >
                            <div>
                                <div className='border-b border-solid border-gray-400'>{item.firstUp}</div>
                                <div>{item.firstDown}</div>
                            </div>
                            <div>x100</div>
                            <div>=</div>
                        </div>
                        <div className='col-span-4 flex items-center justify-center' >
                            { item.secDown ?
                             <div>
                                <div className='border-b border-solid border-gray-400'>{item.secUp}</div>
                                <div>{item.secDown}</div>
                             </div>
                             : item.percentage
                            }
                        </div>
                        <div className='col-span-3 ' > 
                            {item.percentage === '59.3%' ? null :
                                <div className='flex items-center justify-around' >
                                    <div>=</div>
                                    <div>{item.percentage}</div>
                                </div> 
                            // <div></div> 
                             }
                        </div>
                    </div>
                </div>

            )
        })}

    </div>
  )
}

export default TwoSheet