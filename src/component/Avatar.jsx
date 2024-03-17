import React, { useState } from "react";

export default function Avatar(props) {
  const { mode = "" , initImage="src/assets/images/avatar_Blank.jpg" , onFileUpload } = props;

  const [image , setImage] = useState(initImage);


  const imagehandler=(e)=>{
    const imageUploaded = e.target.files[0];
    if(imageUploaded.type.split("/")[0] === "image"){
        let fileReader = new FileReader();
        fileReader.onload = (e) => {
            const { result } = e.target;
            setImage(result);
          };
          fileReader.readAsDataURL(imageUploaded);
          onFileUpload(imageUploaded);
    }else{
        console.log("Please Upload image");
    }

  }

  const removeImageHnadler = ()=>{
    setImage(initImage);
    onFileUpload("");
  }

  if (mode) {
    return (
      <div className={`avatar ${mode}`}>
        <div className="w-24 rounded-full">
          <img src={image} />
        </div>
      </div>
    );
  }

  return (
    <label htmlFor="dropzone-file" className=" flex flex-col items-center hover:cursor-pointer">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={image} />
        </div>
      </div>
      <span className="block underline">choose image</span>
      <input type="file" name="avatar" className="hidden" id="dropzone-file" onChange={imagehandler} />
      <button type="button" className="btn btn-error mt-2" onClick={removeImageHnadler}>Remove</button>
    </label>
  );
}
