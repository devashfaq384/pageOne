import React, { useState } from 'react'
import Header from '../header/Header'
import OneSheet from './OneSheet'
import TwoSheet from './TwoSheet'
import ThreeSheet from './ThreeSheet'
import FourSheet from './FourSheet'
import FiveSheet from './FiveSheet'
import SixSheet from './SixSheet'
import SevenSheet from './SevenSheet'
import { AiOutlineLeft , AiOutlineRight } from 'react-icons/ai'
import { FaFileExport, FaJoomla } from 'react-icons/fa'
import Modal from '../Modal/Modal'

const DataSheet = () => {
  const [first, setfirst] = useState<number>(1)
  const handleAdd  = ()=>{
    setfirst(first + 1)
  }
  const handleBack = () =>{
    setfirst(first - 1)
  }

  const [modal, setModal] = useState<number>(0)
  
  const handleModal = (index : number)=> (event : any) => {
    setModal(1)
  }

  return (
    <div className='m-4' >
        <Header title="Data Sheets" ></Header>
        <div className='my-5 relative bg-white rounded-lg py-10 px-4' >
          <div onClick={handleModal(1)} className='cursor-pointer bg-steelblue-100 w-fit ml-auto rounded-md my-2 px-4 py-2 text-white font-bold text-lg' > 
            <FaFileExport className='mx-2'></FaFileExport>
           Export
           </div>
          {first === 1 ? 
           <OneSheet></OneSheet> : null }
          {first === 2 ? 
           <TwoSheet></TwoSheet> : null }
          {first === 3 ? 
           <ThreeSheet></ThreeSheet> : null }
          {first === 4 ? 
           <FourSheet></FourSheet> : null }
          {first === 5 ? 
           <FiveSheet></FiveSheet> : null }
          {first === 6 ? 
           <SixSheet></SixSheet> : null }
          {first === 7 ? 
           <SevenSheet></SevenSheet> : null }

          <div className='flex justify-end mt-4' >
            {first} of 7
            <div className='pt-[3px]' >

            { first === 1 ? null :
            <AiOutlineLeft onClick={handleBack} className='cursor-pointer mx-1' ></AiOutlineLeft> 
          }
            { first === 7 ? null :
            <AiOutlineRight onClick={handleAdd}  className='cursor-pointer mx-1' ></AiOutlineRight>
          } 
          </div>
          </div>
          <div className={`${modal === 0 ? 'hidden' : ' ' }`} >
            <Modal setModal={setModal} ></Modal>
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-gray-100 opacity-50 rounded-lg'></div>
          </div>

        </div>
    </div>
  )
}

export default DataSheet