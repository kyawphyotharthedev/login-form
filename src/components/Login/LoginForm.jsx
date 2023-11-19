import React from 'react'
import "./login.css";
import { GoPerson, GoLock, GoMail } from "react-icons/go";

const LoginForm = () => {
  return (
    <>
      <div className=" flex justify-center items-center md:absolute md:top-0 md:right-0 md:left-0 md:bottom-0  h-[90vh] md:h-[100vh] ">
        <div className=""></div>
        <div className=" w-[280px] md:w-[300px] h-[380px]  custom-form">
          <div className=" flex flex-col justify-center items-center mt-6 gap-8">
            <div className=" flex flex-col items-center gap-8">
              <h3 className=" uppercase font-medium text-lg form-heading">
                Sign In
              </h3>
              <div className=" flex flex-col gap-10">
                <div className=" form-wrapper flex flex-row items-center">
                  <input
                    type="text"
                    className=" border custom-input w-[200px] placeholder:text-[0.8rem]"
                    placeholder="Name"
                  />
                  <GoPerson />
                </div>
                <div className="form-wrapper flex flex-row items-center">
                  <input
                    type="text"
                    className=" border custom-input  w-[200px] placeholder:text-[0.8rem]"
                    placeholder="Email"
                  />
                  <GoMail className=" text-[0.9 rem]" />
                </div>
                <div className="form-wrapper flex flex-row items-center">
                  <input
                    type="text"
                    className=" border custom-input  w-[200px] placeholder:text-[0.8rem]"
                    placeholder="Password"
                  />
                  <GoLock />
                </div>
              </div>
            </div>
            <button className=" bg-red-500 text-white font-medium w-[80%] md:w-[75%] h-[35px] rounded-full">
              Log In
            </button>
            <div className="flex flex-row gap-1 justify-center items-center">
              <p className=" text-xs font-medium">Don't have an account?</p>
              <p className=" text-xs font-semibold text-red-500 cursor-pointer">Sign Up</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginForm
