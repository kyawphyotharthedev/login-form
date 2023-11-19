import React from 'react'
import "./login.css";
import Lottie from "lottie-react"
import animationData from "/src/animations/Loginanimation.json"

const LoginBg = () => {
  return (
    <div className=' hidden  md:flex md:justify-center md:items-center md:h-[100vh] md:relative '>
      <div className=" md:w-[45%] xl:w-[40%] h-[90%]  ">
            <div className="bg-red-600  h-[100%] bg-block-1 flex justify-start items-center">
              <div className=" text-white ml-[20px]">
                <h2 className=" text-2xl font-medium">
                  Welcome
                </h2>
                <p className=" text-sm font-medium text-white/90">
                  Sign in to your account to <br className=' lg:hidden ' /> continue !
                </p>
              </div>
            </div>
      </div>
      <div className="  md:w-[45%] xl:w-[40%] h-[90%]">
            <div className="bg-white h-[100%] bg-block-2 flex items-center ">
            <div className="animation w-[80%]  ml-[150px] hidden lg:block ">
              <Lottie animationData={animationData}/>
             </div>
            </div>
      </div>
    </div>
  )
}

export default LoginBg

