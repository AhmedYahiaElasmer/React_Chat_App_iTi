import React, { useRef, useState } from "react";
import useRequest from "../hooks/useRequest";


//// can use it in every where you want to show a modal for exit group or delete account
export default function GenericModal({content , header , setDialog , dialog , url}) {
    const dialog_ref = useRef(null);
    const { requestApi } = useRequest();
    const { getAuthUser } = useAuth();
    const token = useCallback(async () => {
        const authUser =  getAuthUser('token');
        return authUser;
      }, [getAuthUser]);
    
    if(dialog) dialog_ref.current.showModal();

    const request = async()=>{
        try {
            const header_ = {
                Authorization: `Bearer ${await token()}`,
              };
            const response = await requestApi("chat/exitGroup", {
                method: "POST",
                headers: header_,
                data: {
                    chatId: "asd",
                },
              });
            setDialog(!dialog)
        } catch (error) {
            console.log(error);
        }

    }
  return (
    <>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle" ref={dialog_ref}>
        <div className="modal-box bg-slate-600">
          <h3 className="font-bold text-lg">{header}</h3>
          <p className="py-4">
            {content}
          </p>
          <div className="modal-action">
            <form method="dialog" className=" flex gap-2">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error btn-outline" onClick={request}>Sure!</button>
              <button className="btn" onClick={()=>setDialog(!dialog)}>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
