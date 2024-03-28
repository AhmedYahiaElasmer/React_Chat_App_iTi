import React, { useState } from 'react'
import GenericModal from './GenericModal';

export default function DropMenu() {
    const [dialog, setDialog] = useState(false);

    const exist = () => {
        
    }
  return (
    <>
    <div className=" block lg:hidden absolute bg-slate-700 rounded border-2 border-slate-700 rounded-t-none w-1/2 m-auto z-10 right-0 left-0">
    <div className="dropdown w-full">
      <div tabIndex={0} role="button" className=" w-full m-auto text-center">
        Menu
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 mt-1 shadow bg-base-content rounded-box w-full"
      >
        <li className=' cursor-pointer hover:text-red-500 w-full text-center transition-all' onClick={()=>setDialog(!dialog)}>
          Exist Group
        </li>
      </ul>
    </div>
  </div>
  <GenericModal dialog={dialog} setDialog={setDialog} content={"Are You Sure for Exit from Group?"} header={"Confirm"} />
  </>   
  )
}
