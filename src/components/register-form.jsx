"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "./button";
import Input from "./input";
import GoogleImg from '@/assets/img/google.png';
import FacebookImg from '@/assets/img/facebook.png';


export default function Register() {
  const router = useRouter();

  return (
    <div className="bg-white-0 rounded-xl w-[1075px]" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500"> 
      <h1 className="mt-[100px] ml-[150px] text-[36px] text-black-0 leading-[42.19px] font-bold">Create Account</h1>
      <div className="flex justify-center items-center mt-[65px]">
        <Button text="Sign up with Google" className="flex items-center pl-[25px] w-[376px] py-[10px] rounded-sm  text-black-0 text-[18px] leading-[21.09px] bg-transparent border-[3px] border-blue-1 hover:bg-blue-1 hover:text-white font-bold transition-all duration-[1000ms]">
          <Image src={GoogleImg} alt="No Google image" objectFit="contain" layout="fixed" className="w-[50px] h-[50px] mr-[30px]"/>
        </Button>
        <Button text="Sign up with Facebook" className="ml-[76px] flex items-center pl-[25px] w-[376px] py-[10px] rounded-sm  text-black-0 text-[18px] leading-[21.09px] bg-transparent border-[3px] border-blue-1 hover:bg-blue-1 hover:text-white font-bold transition-all duration-[1000ms]">
          <Image src={FacebookImg} alt="No Facebook image" objectFit="contain" layout="fixed" className="w-[50px] h-[50px] mr-[30px]"/>
        </Button>
      </div>
      <p className="text-center text-black-2 font-[900] my-[70px]">-&nbsp;&nbsp;OR&nbsp;&nbsp;-</p>
      <div className="text-black-2 font-bold text-center">
        <Input className="text-[18px] pl-[15px] py-[8px] outline-none border-b-[2px] border-black-2 w-[650px] mb-[70px]  focus:outline-blue-1 focus:outline-[2px] focus:rounded-xsm focus:border-[transparent]" placeholder="Full Name" type="text"/>
        <Input className="text-[18px] pl-[15px] py-[8px] outline-none border-b-[2px] border-black-2 w-[650px] mb-[70px] focus:outline-blue-1 focus:outline-[2px] focus:rounded-xsm focus:border-[transparent]" placeholder="Email Address" type="email"/>
        <Input className="text-[18px] pl-[15px] py-[8px] outline-none border-b-[2px] border-black-2 w-[650px] mb-[70px] focus:outline-blue-1 focus:outline-[2px] focus:rounded-xsm focus:border-[transparent]" placeholder="Password" type="password"/>
      </div>
      <Button text="Create Account" className="block w-[650px] py-[11px] mx-auto rounded-sm font-bold text-white text-[24px] leading-[28.13px] bg-blue-1 hover:bg-blue-2 transition-all duration-[1000ms]"/>
      <div className="w-[650px] mx-auto">
        <p className="text-left text-[14px] tont-[600] text-black-2 mt-[20px] mb-[80px] pl-[30px]">Already have an account? &nbsp;&nbsp;&nbsp;<span className="text-blue-1 cursor-pointer hover:text-blue-2 transition-all duration-[1000ms] ease-in-out" onClick={()=>router.push('/login')}>Log in</span></p>
      </div>
    </div>
  )
  }
  