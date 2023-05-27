import React from 'react'

const ThreeSheet = () => {
    const Billing = [
        {
            heading : '5.1 REVENUES',
            subheadings : [
                {
                    title : 'a. Operating Revenues'
                },
                {
                    title : 'b. Non-operating Revenues'
                },
                {
                    title : 'Total'
                },
            ]
        },
        {
            heading : '5.2 EXPENSES',
            subheadings : [
                {
                    title : 'a. Salaries and wages '
                },
                {
                    title : 'b. Pumping cost (Fuel,Oil,Electric)'
                },
                {
                    title : 'c. Chemicals(treatment)'
                },
                {
                    title : 'd. Other O & M Expense'
                },
                {
                    title : 'e. Deprecation Expense'
                },
                {
                    title : 'f. Interest Expense'
                },
                {
                    title : 'g. Others'
                },
                {
                    title : 'Total'
                },
            ]
        },
        {
            heading : '5.3 NET INCOME (LOSS)',
            subheadings:[
                {
                    title : ' '
                }
            ]
        },
        {
            heading : '5.4 CASH FLOW STATMENT',
            subheadings : [
                {
                    title : 'a. Recepits '
                },
                {
                    title : 'b. Disbursments'
                },
                {
                    title : 'c. Net Recepits'
                },
                {
                    title : 'd. Cash balance, beginning'
                },
                {
                    title : 'e. Cash balance, ending'
                },
                {
                    title : 'Total'
                },
            ]
        },
        {
            heading : '5.5 MISCELLANEOUS(Financial)',
            subheadings : [
                {
                    title : 'a. Laans Funds (Total) '
                },
                {
                    title : '1. Cash in Bank'
                },
                {
                    title : '2. Cash on Hand'
                },
                {
                    title : 'b. WD (Funds Total)'
                },
                {
                    title : '1. Cash on Hand'
                },
                {
                    title : '2. Cash in Bank'
                },
                {
                    title : '3. Special Deposits'
                },
                {
                    title : '3. Special Deposits'
                },
                {
                    title : '4. Investments'
                },
                {
                    title : '5. Working Fund'
                },
                {
                    title : '6. Reserves'
                },
                {
                    title : '6.1. WD-LWUA JASA'
                },
                {
                    title : '6.2 General Reserves '
                },
                {
                    title : 'c. Material and Supplies inventory '
                },
                {
                    title : 'd. Accounts Receivable'
                },
                {
                    title : '1. Customers'
                },
                {
                    title : '2. Materials on Laans'
                },
                {
                    title : '3. Officers & Employee'
                },
                {
                    title : 'e. Customers Deposits'
                },
                {
                    title : 'f. Laans payable'
                },
                {
                    title : 'g. Payable to credit eg. supplies'
                },
                {
                    title : 'Total'
                },
            ]
        },
    ]
  return (
    <div className='text-[15px] bg-gray-100 rounded-lg text-gray-600 border border-solid border-gray-400 p-3 ' >
        <div className='font-bold'>5. Financial Data</div>


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
                        <div className='font-bold mt-4' >{item.heading}</div>
                            {
                                item.subheadings.map((sub)=>{
                                    return(
                                        <div className='grid grid-cols-12 gap-3' >
                                            <div className={`col-span-4 mt-2 pl-8 ${sub.title === "Total" || sub.title.includes('1') || sub.title.includes('2') || sub.title.includes('3') || sub.title.includes('4') || sub.title.includes('5') || sub.title.includes('6') ? 'ml-7' : ' ' } `} >{sub.title}</div>
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
            {/* 5.6  On time paid  */}

        <div className='text-[15px] mt-12' >
                    <div className='grid grid-cols-12 ml-4' >
                        <div className='col-span-5 font-bold ' >5.6 ON-TIME PAID, This Month</div>
                        <div className='col-span-7 flex justify-around' >
                            <div> <u>This Month</u> </div>
                            <div><u>Year-to-Date</u> </div>
                        </div>
                    </div>
                    <div className='pl-20 my-3' >a. Operating Ratio {`(benchmark =≤0.75)`} </div>
                    <div className='grid grid-cols-12 my-4' >
                        <div className='col-span-5 text-center flex items-center justify-center gap-5' >
                            <div>
                                <div className='border-b border-solid border-gray-400'>Operating Expenses</div>
                                <div>Operating Revenues</div>
                            </div>
                        </div>
                        <div className='col-span-4 gap-10 flex items-center justify-center' >
                             <div>
                                <div className='border-b border-solid border-gray-400'>37,520,847.46</div>
                                <div>39,602,148.42</div>
                             </div>
                                <div>=</div>
                                <div>0.95</div>
                        </div>
                        <div className='col-span-3 gap-10 flex items-center justify-center' >
                             <div>
                                <div className='border-b border-solid border-gray-400'>37,520,847.46</div>
                                <div>39,602,148.42</div>
                             </div>
                                <div>=</div>
                                <div>0.95</div>
                        </div>
                    </div>
                </div>



    </div>
  )
}

export default ThreeSheet