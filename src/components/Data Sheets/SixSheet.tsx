import React from 'react'

const SixSheet = () => {

    const data = [
        {
            name : 'a'
        },
        {
            name : 'b'
        },
        {
            name : 'c'
        },
        {
            name : 'd'
        },
        {
            name : 'e'
        },
        {
            name : 'f'
        },
        {
            name : 'g'
        },
        {
            name : 'h'
        },
        {
            name : 'i'
        },
        {
            name : 'j'
        },
        {
            name : 'k'
        },
        {
            name : 'l'
        },
        {
            name : 'm'
        },
        {
            name : 'n'
        },
        {
            name : 'o'
        },
    ]

    const review =[
        {
            name : 'a. CPS I installation'
        },
        {
            name : 'b. CPS II installation'
        },
        {
            name : 'c. Water Rates Review'
        },
        {
            name : 'd. Water Safety Plan Review'
        },
        {
            name : 'e. Business Plan Review'
        },
        {
            name : 'f. Ground Water Data Bank Installation'
        },
        {
            name : 'g. Computerized Billing & Collection System'
        },
        {
            name : 'h. Computerized Read & Bill'
        },
        {
            name : 'i. Computerized Accounting System'
        },
        {
            name : 'j. Computerized Inventory System'
        },
    ]

  return (
    <div className=' bg-gray-100 -4 rounded-lg p-4 text-gray-600 border border-solid border-gray-400 py-3 text-[15px]' >
        <div className='font-bold my-2'> 9. STATUS OF VARIOUS DEVELOPMENT</div>
        <div className='font-bold pl-5' >9.1 ON-GOING PROJECTS</div>
        <div className='grid grid-cols-12' >
            <div className='col-span-2' ></div>
            <div className='col-span-3 text-center' >
                DESCRIPTION
            </div>
            <div className='col-span-2 text-center' >
                PROJECT COST {`(PHP X 1,000)`}
            </div>
            <div className='col-span-2 text-center' >
                FUNDING SOURCE
            </div>
            <div className='col-span-2 text-center' >
                PERCENT ACCOMPLISHMENT
            </div>
        </div>

        {data.map((item)=>{
            return(
                <div key={item.name} className='grid grid-cols-12 gap-5 mt-1' >
                    <div className='col-span-1' ></div>
                    <div className='col-span-1 mt-1' >{item.name}</div>
                    <div className='col-span-3' >
                        <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                    </div>
                    <div className='col-span-2' >
                        <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                    </div>
                    <div className='col-span-2' >
                        <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                    </div>
                    <div className='col-span-2' >
                        <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                    </div>
                </div>
            )
        })}


        <div className='font-bold mx-4 my-6' >9.2 CURRENT FINANCIAL ASSITANCE/LOANS/GRNATS</div>

        <div className='pl-8 pb-4'>a. Loans form LWUA</div>

        <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-1' ></div>
            <div className='col-span-2 text-center' >
                LOAN AMOUNT{` (PHP)`}
            </div>
            <div className='col-span-2 text-center' >
                ARREARAGES Beginning of the Year
            </div>
            <div className='col-span-2 text-center' >
                MONTHLY AMORTIZATION {` (PHP)`}
            </div>
            <div className='col-span-2 text-center' >
                PAYMENTS MADE,{` (YTD)`}
            </div>
            <div className='col-span-2 text-center' >
                TERMINAL YEAR OF AMORTIZATION 
            </div>
        </div>


        <div className='grid grid-cols-12 gap-4' >
            <div className='col-span-1' ></div>
            <div className='col-span-2' >
                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            </div>
            <div className='col-span-2' >
                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            </div>
            <div className='col-span-2' >
                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            </div>
            <div className='col-span-2' >
                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            </div>
            <div className='col-span-2' >
                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            </div>
        </div>

        <div className='grid grid-cols-12 gap-4 mt-2' >
            <div className='col-span-1' ></div>
            <div className='col-span-2 text-end pt-2' >
                Total
            </div>
            <div className='col-span-2' >
                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            </div>
            <div className='col-span-2' >
                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            </div>
            <div className='col-span-2' >
                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            </div>
            <div className='col-span-2' >
                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            </div>
        </div>


        <div className='pl-8 py-8'>b. Loans form other Funds Sources</div>
        
        <div className='grid grid-cols-12 gap-4' >
            <div className='col-span-1' ></div>
            <div className='col-span-2' >
                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            </div>
            <div className='col-span-2' >
                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            </div>
            <div className='col-span-2' >
                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            </div>
            <div className='col-span-2' >
                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            </div>
            <div className='col-span-2' >
                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            </div>
        </div>

        <div className='grid grid-cols-12 mt-4 gap-4' >
            <div className='col-span-1' ></div>
            <div className='col-span-2' >
                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            </div>
            <div className='col-span-2' >
                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            </div>
            <div className='col-span-2' >
                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            </div>
            <div className='col-span-2' >
                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            </div>
            <div className='col-span-2' >
                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            </div>
        </div>

        
        <div className='grid grid-cols-12 gap-4 mt-4' >
            <div className='col-span-1' ></div>
            <div className='col-span-2 text-end pt-2' >
                Total
            </div>
            <div className='col-span-2' >
                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            </div>
            <div className='col-span-2' >
                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            </div>
            <div className='col-span-2' >
                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            </div>
            <div className='col-span-2' >
            </div>
        </div>


        <div className='font-bold mb-2 mt-6'> 10. INSTITUTIONAL DEVELOPMENT/REVIEWS</div>
        <div className='font-bold m-4' >10.1 LWUA REVIEW AND SYSTEM INSTALLATION</div>
        <div className='grid grid-cols-12' >
            <div className="col-span-4"></div>
            <div className="col-span-3"><u>Year when last installed/reviewed</u></div>
        </div>

        {review.map((item)=>{
            return(
            <div key={item.name} className="grid grid-cols-12 ml-10 ">
                <div className='col-span-4 mt-2' >
                    {item.name}
                </div>
                <div className='col-span-2 mt-2' >
                    <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                </div>
            </div>
            )
        })}


    </div>
  )
}

export default SixSheet