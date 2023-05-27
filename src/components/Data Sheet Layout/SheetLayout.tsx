import React from 'react'
import Header from '../header/Header'
import { AiOutlineEye , AiOutlineLeft , AiOutlineRight } from 'react-icons/ai'

interface ChildProps {
    setMenu: React.Dispatch<React.SetStateAction<number>>;
  }

const SheetLayout: React.FC<ChildProps> = ({setMenu}) => {

    const handleMenu = (index : number) => (event : any)=>{
        setMenu(index)
    }
  return (
    <div className='bg-gray-100 my-4 text-[15px]' >
        <Header title="Data Sheet" ></Header>
        <div className='bg-white pt-2 pb-10' > 
            <div className='grid grid-cols-12 my-5 py-5 '>
                <div className='col-span-1' ></div>
                <div className='col-span-2 text-center font-bold'>Date Created</div>
                <div className='col-span-2 text-center font-bold'>Month Ending</div>
                <div className='col-span-2 text-center font-bold'>Year</div>
                <div className='col-span-2 text-center font-bold'>Status</div>
                <div className='col-span-2 text-center font-bold'>Action</div>
                <div className="col-span-1"></div>
            </div>


            <div className='border border-solid border-gray-400 w-[85%] mx-auto' >
                <div className='grid grid-cols-10 m-0 text-gray-500  '>
                    <div className='col-span-2  py-2 text-center'>11/15/22</div>
                    <div className='col-span-2 text-center py-2'>November</div>
                    <div className='col-span-2 text-center py-2'>2022</div>
                    <div className='col-span-2 text-center py-2'>
                        <button className='bg-red-500 text-center px-3 py-2 text-white rounded-lg ' >In Progress</button>
                    </div>
                    <div className='col-span-2 text-center py-4'>
                        <AiOutlineEye className='cursor-pointer' onClick={handleMenu(6)} ></AiOutlineEye>
                    </div>
                </div>
                <div className="grid grid-cols-12 border-t border-solid border-gray-500"></div>
                <div className='grid grid-cols-10 m-0 text-gray-500  '>
                    <div className='col-span-2  py-2 text-center'>10/15/22</div>
                    <div className='col-span-2 text-center py-2'>October</div>
                    <div className='col-span-2 text-center py-2'>2022</div>
                    <div className='col-span-2 text-center py-2'>
                        <button className='bg-green-500 text-center px-3 py-2 text-white rounded-lg ' >Completed</button>
                    </div>
                    <div className='col-span-2 text-center py-4'>
                        <AiOutlineEye onClick={handleMenu(6)} className='cursor-pointer' ></AiOutlineEye>
                    </div>
                </div>
                <div className="grid grid-cols-12 border-t border-solid border-gray-500"></div>
                <div className='grid grid-cols-10 m-0 text-gray-500  '>
                    <div className='col-span-2  py-2 text-center'>09/15/22</div>
                    <div className='col-span-2 text-center py-2'>September</div>
                    <div className='col-span-2 text-center py-2'>2022</div>
                    <div className='col-span-2 text-center py-2'>
                        <button className='bg-green-500 text-center px-3 py-2 text-white rounded-lg ' >Completed</button>
                    </div>
                    <div className='col-span-2 text-center py-4'>
                        <AiOutlineEye onClick={handleMenu(6)} className='cursor-pointer' ></AiOutlineEye>
                    </div>
                </div>


            </div>
            <div className='flex text-[14px] justify-end my-4 mr-16' >
                <div className='mx-6' >
                    Rows per page: 5↓  
                </div>
                <div className='mx-2' >
                    {` `} 1-3 of 3
                    <AiOutlineLeft></AiOutlineLeft>
                    <AiOutlineRight></AiOutlineRight>
                </div>
            </div>


        </div>

    </div>
  )
}

export default SheetLayout