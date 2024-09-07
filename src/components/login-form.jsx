"use client"

import Button from "./button";
import Input from "./input";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <div className="bg-black-0 w-[380px] mx-auto pt-[200px]" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500"> 
      <h1 className="text-[36px] text-white-0 leading-[42.19px] font-bold">Login</h1>
      <p className="text-[#FFFFFFB2] font-[900] mt-[12px] mb-[36px] text-[16px]">Enter your account details</p>
      <div className="text-[#FFFFFFB2] font-bold">
        <Input className="text-[16px] py-[12px] px-[10px] outline-none bg-transparent border-b-[2px] border-black-2 w-[100%] mb-[24px] focus:outline-black-2 focus:outline-[2px] focus:rounded-xsm focus:border-[transparent]" placeholder="Username" type="text"/>
        <Input className="text-[16px] py-[12px] px-[10px] outline-none bg-transparent border-b-[2px] border-black-2 w-[100%] focus:outline-black-2 focus:outline-[2px] focus:rounded-xsm focus:border-[transparent]" placeholder="Password" type="password"/>
      </div>
      <p className="text-[16px] text-[#FFFFFFB2] mt-[24px] mb-[48px]">Forgot Password?</p>
      <Button text="Create Account" className="block w-[100%] py-[11px] mx-auto rounded-sm font-bold text-white text-[24px] leading-[28.13px] bg-blue-1 border-[2px] border-blue-1 hover:bg-transparent hover:text-blue-1 hover:border-blue-1 transition-all duration-[1000ms]"/>
      <div className="flex justify-center items-center mt-[150px] mb-[120px]">
        <p className="text-left text-[16px] text-black-2 pr-[67px]">Don’t have an account?</p>
        <Button text="Sign up" className="block w-[100px] py-[12px] mx-auto rounded-sm font-[400] text-white text-[16px] leading-[24px] bg-black-1 hover:bg-blue-1 transition-all duration-[1000ms]" onClick={()=>router.push('/register')}/>
      </div>
    </div>
  )
  }
  