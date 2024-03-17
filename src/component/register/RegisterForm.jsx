import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./register.css";
import { useRef } from "react";
import Required from "./required";
import { useState } from "react";
import { UplaodFile } from "../../utils/uploadimage";

import Avatar from "../Avatar";
import { signUp } from "../../api/auth";


function RegisterForm() {
  const [fileUpload, onFileUpload] = useState("");

  const uploadAvatarHandler = async () => {
    try {
      if (fileUpload) {
        const urlFile = await UplaodFile("avatar", fileUpload);
        console.log(fileUpload);
      }
    } catch (error) {
      console.log(error);
    }
  };


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, dirtyFields },  
  } = useForm({
    mode:"onChange"
  });
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit =  async (data) => {
    let urlFile=""; //image Url back from Firebase
    console.log(data);
    const {fristName , password ,email , lastName} = data


    if (fileUpload) urlFile = await UplaodFile("avatar", fileUpload);

    
    const signUp_ = await  signUp({
      firstname:fristName,
      lastname:lastName,
      gender:"male",
      email,
      password,
      image:urlFile
    })

    
    console.log({signUp_ ,urlFile });
  };

  return (
    <>
      {/* <div className=" flex flex-col gap-1 items-center">
        <label htmlFor="avatar">Upload File</label>
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          name="avatar"
          id=""
        />
        <button onClick={uploadAvatarHandler} className="btn btn-outline">
          Upload
        </button>
      </div> */}
      <div className="p-4 bg-black bgc">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="  flex flex-col text-white gap-8 justify-center items-center py-16 px-24"
        >
          <div className="flex flex-col gap-4 items-center ">
            <h1 className="text-2xl font-extrabold">Create new account</h1>
            <Avatar onFileUpload={onFileUpload}  />
          </div>
          <div className="flex flex-col  ">
            <div className="flex gap-6  ">
              <div className="flex flex-col  ">
                <label htmlFor="fristName" className="w-auto">
                  First Name
                  <Required error={errors.fristName}/>
                </label>
                <input
                  {...register("fristName", {
                    required: "First Name requierd",
                    maxLength: {
                      value: 12,
                      message: "First Name must 12 characters",
                    },
                    minLength: {
                      value: 4,
                      message: "First Name must 4 characters",
                    },
                  })}
                  id="fristName"
                  type="text"
                  className={
                    errors.fristName
                      ? "outline-red-600 input input-bordered bg-transparent   w-auto "
                      : `${
                          dirtyFields?.fristName ? "outline-green-600" : ""
                        }  input input-bordered bg-transparent   w-auto`
                  }
                />
                {/* {console.log(dirtyFields?.fristName)} */}
                <span className="text-red-600 h-7">
                  {errors.fristName?.message}
                </span>
              </div>
              <div className="flex flex-col  ">
                <label htmlFor="lastName" className="w-auto ">
                  <span className="p-2 inline-block ">Last Name</span>
                </label>

                <input
                  {...register("lastName", {
                    maxLength: {
                      value: 12,
                      message: "LastName must 12 characters",
                    },
                    minLength: {
                      value: 4,
                      message: "LastName must 4 characters",
                    },
                  })}
                  id="lastName"
                  type="text"
                  className={
                    errors.lastName
                      ? "outline-red-600 input input-bordered bg-transparent   w-auto "
                      : `${
                          dirtyFields?.lastName ? "outline-green-600" : ""
                        }  input input-bordered bg-transparent   w-auto`
                  }
                />

                <span className="text-red-600 h-7">
                  {errors.lastName?.message}
                </span>
              </div>
            </div>

            <label htmlFor="email" className="w-auto">
              E-mail <Required error={errors.email}/>
            </label>

            <input
              {...register("email", {
                required: "this email requierd",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
              id="email"
              type="email"
              className={
                errors.email
                  ? "outline-red-600 input input-bordered bg-transparent   w-auto "
                  : `${
                      dirtyFields?.email ? "outline-green-600" : ""
                    }  input input-bordered bg-transparent   w-auto`
              }
            />

            <span className="text-red-600 h-7">{errors.email?.message}</span>

            <label htmlFor="password" className="w-auto">
              Password <Required error={errors.password}/>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be more than 8 characters",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/,
                  message: `password must contain :\n
               at lest one lowercase letter ,\n
               one uppercase letter,\n
               one digit,\n
               one special character`,
                },
                maxLength: {
                  value: 16,
                  message: "Password cannot exceed more than 16 characters",
                },
              })}
              id="password"
              type="password"
              className={
                errors?.password
                  ? "outline-red-600 input input-bordered bg-transparent   w-auto "
                  : `${
                      dirtyFields?.password ? "outline-green-600" : ""
                    }  input input-bordered bg-transparent   w-auto`
              }
            />

            <div className="text-red-600 h-7">
              {errors.password && (
                <ul>
                  {errors?.password.message
                    .split("\n")
                    .map((errorMessage, index) => (
                      <li key={index}>{errorMessage}</li>
                    ))}
                </ul>
              )}
            </div>
            <label htmlFor="Re-password" className="w-auto">
              Re-Password <Required error={errors.Repassword}/>
            </label>
            <input
              {...register("Repassword", {
                required: true,
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
              id="Re-password"
              type="password"
              className={
                errors?.Repassword
                  ? "outline-red-600 input input-bordered bg-transparent   w-auto "
                  : `${
                      dirtyFields?.Repassword ? "outline-green-600" : ""
                    }  input input-bordered bg-transparent   w-auto`
              }
            />

            {errors.Repassword && (
              <span className="text-red-600 h-7">
                {errors.Repassword.message}
              </span>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="btn  btn-wide text-white bg-transparent  border-white	 hover:bg-grad-color "
            >
              Sign Up
            </button>
          </div>
          <div className="flex justify-between lg:gap-20 md:gap-5 ">
            <p>
              Already a member?
              <Link to="" className="link   font-grad link-hover ">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
