import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import Dashboard from '../dashboard/Dashbaord';
import Graph from '../dashboard/Graph';
import Ytd from '../dashboard/Ytd';
import DataSheet from '../Data Sheets/DataSheet';
import SheetLayout from '../Data Sheet Layout/SheetLayout';

const AdminLayout = () => {
  const [menu, setMenu] = useState<number>(0)
  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-3'>
            <Sidebar setMenu={setMenu} ></Sidebar>
        </div>
        <div className='col-span-9'>
          {/* main page  */}
          {menu === 0 ? 
          <div>
            <Dashboard></Dashboard>
            <div className=' mt-6 grid grid-cols-12' >
            <div className='col-span-12 xl:col-span-8' >
            <Graph></Graph>
            </div>
            <div className='flex flex-col md:flex-row xl:flex-col  col-span-12 xl:col-span-4' >
            <Ytd></Ytd>
            </div>
            </div>
          </div> : null 
          }


          {/* Data Sheets  */}
          {menu === 2 ? 
          <SheetLayout setMenu={setMenu} ></SheetLayout>
          : null
        }
          {menu === 6 ? 
         <DataSheet></DataSheet>
          : null
        }
        
        
        </div>
    </div>
  );
}

export default AdminLayout;