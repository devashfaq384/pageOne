import React, { useState } from 'react';
import { HomeIcon , CubeTransparentIcon , ChartBarIcon , ClipboardDocumentIcon , UserIcon } from '@heroicons/react/24/solid'

interface ChildProps {
  setMenu: React.Dispatch<React.SetStateAction<number>>;
}
const Sidebar: React.FC<ChildProps> = ({setMenu}) => {
  const [activeBox, setActiveBox] = useState<number>(0);


  const handleBoxClick = (index: number) =>(event : any) => {
    setActiveBox(index);
    setMenu(index)
  };

  return (
    <div className='m-4 p-2 rounded-lg h-[94%]  bg-white' >
        <div className='flex items-center gap-2 '>
            <div>
                <img  className='w-14' src='/main-logo-bg-white-1@2x.png' alt="Logo" />
            </div>
            <div className='text-steelblue-100 text-[16px] font-bold' >GSC Water District</div>
        </div>
        <div className='flex justify-center flex-col mb-4 mt-4 text-sm md:text-[16px]' >
          <div className={`cursor-pointer flex rounded-lg w-[90%]  text-steelblue-100 p-2 ${activeBox === 0 ? 'bg-steelblue-100 shadow-lg !text-white' : 'hover:bg-gray-100'} `} 
          onClick={handleBoxClick(0)}
          >
            <HomeIcon className={` ${activeBox === 0 ? "text-white" : "text-steelblue-100"}  w-6`} ></HomeIcon>
            <span className='font-bold relative left-1 md:left-6 hidden md:inline ' >
              Dashboard
            </span>
          </div>
        </div>
        <div className='flex justify-center flex-col mb-4 ' >
        <div className={`rounded-lg cursor-pointer w-[90%] flex text-steelblue-100 p-2 ${activeBox === 1 ? 'bg-steelblue-100 shadow-lg !text-white' : 'hover:bg-gray-100'} `} 
          onClick={handleBoxClick(1)}
          >
            <CubeTransparentIcon className={` ${activeBox === 1 ? "text-white" : "text-steelblue-100"}  w-6`} ></CubeTransparentIcon>
            <span className='font-bold relative left-1 md:left-6 hidden md:inline ' >
              Development/Rev.
            </span>
          </div>
        </div>
        <div className='flex justify-center flex-col mb-4 ' >
        <div className={`rounded-lg cursor-pointer w-[90%] flex text-steelblue-100 p-2 ${activeBox === 2 ? 'bg-steelblue-100 shadow-lg !text-white' : 'hover:bg-gray-100'} `} 
          onClick={handleBoxClick(2)}
          >
            <ChartBarIcon className={` ${activeBox === 2 ? "text-white" : "text-steelblue-100"}  w-6`} ></ChartBarIcon>
            <span className='font-bold relative left-1 md:left-6 hidden md:inline ' >
              Data Sheet
            </span>
          </div>
        </div>
        <div className='flex justify-center flex-col mb-4 ' >
        <div className={`rounded-lg cursor-pointer w-[90%] flex text-steelblue-100 p-2 ${activeBox === 3 ? 'bg-steelblue-100 shadow-lg !text-white' : 'hover:bg-gray-100'} `} 
          onClick={handleBoxClick(3)}
          >
            <ClipboardDocumentIcon className={` ${activeBox === 3 ? "text-white" : "text-steelblue-100"}  w-6`} ></ClipboardDocumentIcon>
            <span className='font-bold relative left-1 md:left-6 hidden md:inline' >
              Report
            </span>
          </div>
        </div>
        <div className='flex justify-center flex-col mb-4 ' >
        <div className={`rounded-lg cursor-pointer w-[90%] flex text-steelblue-100 p-2 ${activeBox === 4 ? 'bg-steelblue-100 shadow-lg !text-white' : 'hover:bg-gray-100'} `} 
          onClick={handleBoxClick(4)}
          >
            <UserIcon className={` ${activeBox === 4 ? "text-white" : "text-steelblue-100"}  w-6`} ></UserIcon>
            <span className='font-bold relative left-1 md:left-6 hidden md:inline ' >
              Users
            </span>
          </div>
        </div>
    </div>
  )
}

export default Sidebar