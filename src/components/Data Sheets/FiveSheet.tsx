import React from 'react'

const FiveSheet = () => {
    const WaterProduct =[
        {
            heading : '',
            subheadings : [
                {
                    title : 'd. metered Unbilled'
                },
                {
                    title : 'e. Unmetered Unbilled'
                },
                {
                    title : 'f. Total Accounted'
                },
            ]
        },
        {
            heading : "6.5 WATER USE ASSESSMENT",
            subheadings : [
                {   
                    title : "a. Average Monthly Conns/Conn (m3)"
                },
                {   
                    title : "Residential(m3/conn/mo)"
                },
                {   
                    title : "Government(m3/conn/mo)"
                },
                {   
                    title : "Commercial/Industrial(m3/coon/mo)"
                },
                {   
                    title : "Bulk/Wholesale(m3/coon/mo)"
                },
                {   
                    title : "b. Average liters per capita/day(lpcd)"
                },
                {   
                    title : "c. Accounted for water (%)"
                },
                {   
                    title : "d. Revenue producing water (%)"
                },
                {   
                    title : "e. Percent Non-revenue water (%)"
                },
                {   
                    title : "f.24/7 Water Service (Y/N)"
                },
            ]
        },
    ]

    const EmployeeData = [
        {
            title : 'a. Total'
        },
        {
            title : 'b. Regular'
        },
        {
            title : 'c. Casual'
        },
        {
            title : 'd. Job-order/COS'
        },
        {
            title : 'e. Number of active connections/employee'
        },
        {
            title : 'f. Average Monthly salary/employee'
        },
    ]

    const attendEmployee = [
        {
            pos : 'C',
            Name : "Engr. Manuel Furtonato Yaphockun",
            regular : '2',
            emergency : '2',
            total : '4'
        },
        {
            pos : 'VC',
            Name : "Dr. Francisco Lorenzo ",
            regular : '2',
            emergency : '2',
            total : '4'
        },
        {
            pos : 'S',
            Name : "Atty. Rambor Thomas Bartolome",
            regular : '2',
            emergency : '2',
            total : '4'
        },
        {
            pos : 'T',
            Name : "Ms.Marjorie Bandolon-Cartojano",
            regular : '2',
            emergency : '2',
            total : '4'
        },
        {
            pos : 'M',
            Name : "Mr. Isaias Golez , Jr.",
            regular : '2',
            emergency : '2',
            total : '4'
        },
    ]


    const meets  = [
        {
            title : "a. No. Resolutions passed"
        },
        {
            title : "b. No. Policies passed"
        },
        {
            title : "c. Directors Fees paid"
        },
        {
            title : "d. Meetings:"
        },
        {
            title : '1. Held'
        },
        {
            title : '2. Regular'
        },
        {
            title : '3. Special/Emergency'
        }
    ]
  return (
    <div className=' bg-gray-100 rounded-lg p-4 text-gray-600 border border-solid border-gray-400 py-3 text-[15px]' >
        {WaterProduct.map((item)=>{
                return(
                    <div className='ml-4' >
                        <div className={`font-bold mt-4 `} >{item.heading}</div>
                            {
                                item.subheadings.map((sub)=>{
                                    return(
                                        <div className='grid grid-cols-12 gap-3' >
                                            <div className={`col-span-6 mt-2 pl-8 ${sub.title === "Total" || sub.title.includes('1') || sub.title.includes('2') || sub.title.includes('3') || sub.title.includes('4') || sub.title.includes('5') || sub.title.includes('6') ? 'ml-7' : ' ' } `} >{sub.title}</div>
                                            <div className='col-span-3 mt-2' >
                                                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                                            </div>
                                            {  sub.title.includes('%') || sub.title.includes('Unbilled') || sub.title.includes('Total Accounted') ?  
                                            <div className='col-span-3 mt-2' >
                                                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                                            </div>: null
                                            }
                                        </div>
                                        )
                                })
                            }
                    </div>

                )
            })}


                    <div className='ml-4' >
                        <div className={`font-bold mt-4 `} >7. STORAGE FACILITIES</div>
                            <div className='grid grid-cols-12' >
                                <div className='col-span-6' ></div>
                                <div className='col-span-3' > <u>No. of Units</u> </div>
                                <div className='col-span-3' > <u>Total Capacity{`(m3)`}</u> </div>
                            </div>
                                        <div className='grid grid-cols-12 gap-3' >
                                            <div className={`col-span-6 mt-2 pl-8 `} >a. Elevated Reservoir{`(s)`}</div>
                                            <div className='col-span-3 mt-2' >
                                                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                                            </div>
                                            <div className='col-span-3 mt-2' >
                                                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-12 gap-3' >
                                            <div className={`col-span-6 mt-2 pl-8 `} >b. Ground Reservoir{`(s)`}</div>
                                            <div className='col-span-3 mt-2' >
                                                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                                            </div>
                                            <div className='col-span-3 mt-2' >
                                                <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                                            </div>
                                        </div>
                    </div>

            <div className='m-5' >
                <div className={`font-bold mt-4 `} >8. MISCELLANEOUS</div>
                <div className='ml-4' >
                        <div className={`font-bold mt-4 `} >8.1 EMPLOYEES</div>
                        {EmployeeData.map((item)=>{
                            return (
                            <div className='grid grid-cols-12 gap-3' >
                                    <div className={`col-span-6 mt-2 pl-8 `} >{item.title}</div>
                                <div className='col-span-3 mt-2' >
                                    <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                                </div>
                            </div>

                            )
                        })}
                    </div>
            </div>



            <div className='m-5 grid grid-cols-12' >
                <div className='ml-4 col-span-6 font-bold'>8.2 BOARD OF DIRECTORS</div>
                <div className='col-span-6 text-center' ><u>Number of Meetings Attended</u></div>
            </div>

            <div className='grid grid-cols-12 gap-4' >
                <div className='col-span-4'></div>
                <div className='col-span-4 text-center '>
                    <div className='border-b-2 border-solid border-gray-400' >This Month</div>
                    <div>Special/</div>
                </div>
                <div className='col-span-4 text-center '>
                    <div className='border-b-2 border-solid border-gray-400' >This Month</div>
                    <div>Special/</div>
                </div>
            </div>

            <div className='grid grid-cols-12 my-4' >
                <div className='col-span-1 text-center' >Position</div>
                <div className='col-span-3 text-center' >Name</div>
                <div className='col-span-4 flex justify-around mx-3'>
                    <div>Regular</div>
                    <div>Emergency</div>
                    <div>Total</div>
                </div>
                <div className='col-span-4  flex justify-around mx-3'>
                    <div>Regular</div>
                    <div>Emergency</div>
                    <div>Total</div>
                </div>
            </div>

            {
                attendEmployee.map((item)=>{
                    return(
                    <div key={item.Name} className='grid grid-cols-12 text-center' >
                        <div className='col-span-1' >{item.pos}</div>
                        <div className='col-span-3 border-b-2 border-solid border-gray-400 text-center text-[12px] pt-1' >{item.Name}</div>
                        <div className='col-span-4 flex justify-between gap-2 mx-3'>
                            <div className='border-b-2 border-solid border-gray-400 w-full' >{item.regular}</div>
                            <div className='border-b-2 border-solid border-gray-400  w-full' >{item.emergency}</div>
                            <div className='border-b-2 border-solid border-gray-400 w-full ' >{item.total}</div>
                        </div>
                        <div className='col-span-4 flex justify-between gap-2 mx-3'>
                            <div className='border-b-2 border-solid border-gray-400 w-full' >{item.regular}</div>
                            <div className='border-b-2 border-solid border-gray-400  w-full' >{item.emergency}</div>
                            <div className='border-b-2 border-solid border-gray-400 w-full ' >{item.total}</div>
                        </div>
                    </div>
                    )
                })
            }


            <div className='grid grid-cols-12 mt-10' >
                <div className='col-span-3' ></div>
                <div className='col-span-3 text-center' ><u>This Month</u></div>
                <div className='col-span-3 text-center' ><u>Year-to Date</u></div>
            </div>

            {
                meets.map((item)=>{
                    return (
                    <div key={item.title} className='grid grid-cols-12 ml-4 mt-2 gap-4' >
                        <div className={`col-span-3 ${item.title.includes('1.') ||item.title.includes('2.') ||item.title.includes('3.') ? 'pl-5' : ' ' } `} >
                            {item.title}
                        </div>
                        
                        <div className='col-span-3' >
                            <div className={`border-b-2 ${item.title === "d. Meetings:" ? 'hidden' : ' '} border-solid border-gray-400`} ><input type="text" className=" bg-gray-100 outline-none"/></div>
                        </div>
                        <div className='col-span-3' >
                            <div className={`border-b-2 ${item.title === "d. Meetings:" ? 'hidden' : ' '} border-solid border-gray-400`} ><input type="text" className=" bg-gray-100 outline-none"/></div>
                        </div>
                    </div>                        
                    )
                })
            }


    </div>
  )
}

export default FiveSheet