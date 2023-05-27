import React from 'react'

interface ChildProps {
    setModal: React.Dispatch<React.SetStateAction<number>>;
}
const Modal : React.FC<ChildProps> = ({setModal}) => {

    const handleModal =(index : number)=> (event : any)=>{
        setModal(index)
    }

  return (
    <div className='rounded-lg z-10 w-[500px] absolute m-auto top-[8%] bottom-0 right-0 left-0 '>
        {/* header  */}
        <div className='flex px-4 py-2 justify-between bg-steelblue-100 rounded-t-lg text-white' >
            <div>Publish as PDF</div>
            <div className='cursor-pointer font-bold rounded-full hover:bg-gray-500 px-2 ' onClick={handleModal(0)} >X</div>
        </div>
        {/* body  */}
        <div className='h-32 bg-white text-steelblue-100 flex justify-center items-center ' >
            Downloading Monthly Data Sheet
        </div>
        {/* footer  */}
        <div className='bg-gray-200 rounded-b-lg py-4 px-4 flex justify-end ' >
            <button onClick={handleModal(0)} className='cursor-pointer bg-yellow-400 font-bold text-white rounded-full px-6 py-2 '>Cancel</button>
        </div>
    </div>
  )
}

export default Modal