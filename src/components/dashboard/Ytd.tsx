import React from 'react'

const Ytd = () => {
  const data = [
    {
      ratio : 'Current Ratio - YTD',
      num : '932',
      image : '/icon.svg'
    },
    {
      ratio : 'Staff Productivity Index',
      num : '231',
      image : '/mask-group.svg'
    },
  ]

  return (
      <>
      {data.map((item)=>{
        return(
          <div className='bg-white mb-6 w-[300px] xl:w-auto mr-6 my-6 xl:mt-0 xl:mx-3 h-fit rounded-lg py-5 px-2 text-center ' >
              <div className='font-bold text-[25px] py-3' >{item.ratio}</div>
              <div className=' flex justify-center items-center gap-4 font-bold text-[30px]' >   
                  {item.num}
              <img src={item.image} alt="" />
              </div>
          </div>
        )
      })}
      </>
  )
}
export default Ytd