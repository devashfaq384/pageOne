import React from 'react'

const OneSheet = () => {

  const areaInfo = [
    {
      name: 'Province:',
      value: 'South Cotabato'
    },
    {
      name: 'Region:',
      value: '12'
    },
    {
      name: 'CCC No',
      value: 'South Cotabato'
    },
    {
      name: 'Email Address:',
      value: 'gscwaterdistrict@yahoo.com'
    },
    {
      name: 'Website, If any:',
      value: 'gensanwater.gov.ph'
    },
    {
      name: 'Contact Nos.(mobile):',
      value: '09228014170'
    },
    {
      name: '(landline):',
      value: '0835534960'
    },
    {
      name: 'Coordinates of WD office(Longitude, Latitude):',
      value: '125°11`4.21"E/ 6°7`32.37"N'
    },
    {
      name: 'Under Joint Venture Agreement?(Yes/No)',
      value: 'No'
    },
  ]

  const data = [
    {
      anexed :"Main Mun"
    },
    {
      anexed :"Annexed"
    },
    {
      anexed :"Annexed"
    },
    {
      anexed :"Annexed"
    },
    {
      anexed :"Annexed"
    },
    {
      anexed :"Annexed"
    },
    {
      anexed :"Annexed"
    },
    {
      anexed :"Annexed"
    },
    {
      anexed :"Annexed"
    },
  ]

  return (
    <div className=' bg-gray-100 px-2 rounded-lg text-gray-600 border border-solid border-gray-400 py-3' >
        <div>
          <div className='text-[30px] font-bold text-center'>Monthly Data Sheet</div>
          <div className='text-center' >For the Month Ending <u>January 31,</u> <u> 2022</u></div>
        </div>
        {/* District Data  */}
        <div className='grid grid-cols-12'>
          <div className='col-span-6 flex items-end flex-col mx-2'>
            <div className='font-bold text-[22px]' >Name of Water District:</div>
            {
              areaInfo.map((item)=>{
                return(
                  <div className='mt-[2.5px]' key={item.name} >
                    {item.name}
                  </div>

                )
              })
            }
          </div>
          <div className='col-span-6 w-fit'>
            <div className='font-bold text-[22px] w-fit px-2 border-b-4 border-solid border-gray-500' >
              General Santos City
            </div>
            {
              areaInfo.map((item)=>{
                return(
                  <div key={item.name} className=' text-center px-2 border-b-2 border-solid border-gray-500' >
                    {item.value}
                  </div>
                )
              })
            }
          </div>

        </div>

        {/* Munciple Data  */}

        <div className='my-3' >
          <div className='font-bold text-[14px] pl-3' >1.MUNCIPAL DATA/ SERVICE COVERAGE</div>
          <div className='font-bold text-[14px] pl-8 pt-1' >1.1Muncipality${"(ies)"} Served</div>
            {/* table is first line  */}
          <div className='grid grid-cols-12 text-center mt-2 '>
            <div className='col-span-1'></div>
            <div className='col-span-3'>Name of Muncipality{`(ies)`}</div>
            <div className='col-span-2'>Mun.Class</div>
            <div className='col-span-2'>Total No.of Brgys.</div>
            <div className='col-span-2'>No. of Brgys. Served</div>
            <div className='col-span-2'>Percent Ser5. to total Brgys.</div>
          </div>
          {/* table second line  */}
          {
            data.map((item)=>{
              return(
              <div key={item.anexed} className='grid grid-cols-12 text-center mt-2 flex-row justify-center'>
                <div className='col-span-1 text-[14px] pt-1'>{item.anexed}:</div>
                <div className='col-span-3 mx-4 '>
                  <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                </div>
                <div className='col-span-2 mx-3 '>
                  <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                </div>
                <div className='col-span-2 mx-3 '>
                  <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                </div>
                <div className='col-span-2 mx-3 '>
                  <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                </div>
                <div className='col-span-2 mx-3 '>
                  <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                </div>

              </div>
              )    
            })
          }

        </div>
        {/* Service connection data  */}

        <div className='mt-8' >
          <div className='font-bold text-[14px] pl-3' >1.SERVICE CONNECTION DATA</div>
          
        </div>

        <div className='grid grid-cols-12'>
          <div className='col-span-5 flex items-start flex-col mx-2'>
          <div className='ml-8 font-bold' >
            <div>2.1 Total Service {`( Active + Inactive )`}</div>
            <div>2.2 Total Active</div>
            <div>2.3 Total metered</div>
            <div>2.4 Total billed</div>
            <div>2.5 Ave. Persons/Conn.</div>
            <div className='mt-1' >2.6 Population Served {`(2.22 x 2.25)`}</div>
            <div className='mt-5' >2.7 Growth in Service Connections {`(S.C)`}</div>
          </div>
          </div>
          <div className='col-span-2'>
            <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            <div className='border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
          </div>
        </div>

        {/* New connections  */}
        <div className='grid grid-cols-12 ml-[100px] '>
          <div className='col-span-3'>
            <div className='text-gray-100'>one</div>
            <div className='my-1' >New</div>
            <div className='my-1' >Reconnection</div>
            <div className='my-1' >Disconnected</div>
            <div className='my-1' >Increase {`(Derease)`} in S.C</div>
            <div className='my-1' >Disconnected</div>
            <div className='my-1' >Increase {`(Derease)`} in S.C</div>
          </div>
          <div className='col-span-3 mx-2'>
            <div className='my-1 text-center' > <u>This Month</u></div>
            <div className='   px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            <div className='   px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            <div className='   px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            <div className='   px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            <div className='   px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            <div className='   px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>


          </div>
          <div className='col-span-3 mx-2'>
            <div className='my-1 text-center ' > <u>Year-to-Date</u></div>
          <div className='  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
          <div className='  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
          <div className='  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
          <div className='  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
          <div className='  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
          <div className='  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
           

          </div>
        </div>


          <div className='grid grid-cols-12 ml-10' >
            <div className="col-span-4" >
              <div className='mt-3 font-bold' >2.8 No. of Customers in Arrears</div>
              <div className='mt-3 font-bold' >2.9 No. of Active Connections</div>
              <div className='mt-3' >Residential/Domestic</div>
              <div className='mt-3' >Government</div>
              <div className='mt-3' >Commercial/industrial</div>
              <div className='mt-3' >Full Commercial</div>
              <div className='mt-3 ml-6' >Commercial A</div>
              <div className='mt-3 ml-6' >Commercial B</div>
              <div className='mt-3 ml-6' >Commercial C</div>
              <div className='mt-3 ml-6' >Commercial D</div>
              <div className='mt-3' >Bulk/ Wholesale</div>
              <div className='mt-3 ml-7' >Total</div>
            </div>
            <div className="col-span-2 mx-3">
              <div className=' mt-6 px-2 border-b-2 border-solid border-gray-400' ></div>
              <div className='mt-3' ><u>Metered -</u></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            </div>
            <div className="col-span-2 mx-3">
              <div className=' mt-6 px-2 border-b-2 border-solid border-gray-400' ></div>
              <div className='mt-3' ><u>Unmetered -</u></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
            </div>
            <div className="col-span-2 mx-3">
              <div className=' my-6 px-2 border-0 border-gray-400' ></div>
              <div className='mt-10' ><u>Total</u></div>
              <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
                <div className=' mt-[10px]  px-2 border-b-2 border-solid border-gray-400' ><input type="text" className=" bg-gray-100 outline-none"/></div>
              
            </div>
          </div>


    </div>
  )
}

export default OneSheet