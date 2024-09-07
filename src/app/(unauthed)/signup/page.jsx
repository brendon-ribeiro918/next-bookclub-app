"use client"


import Layouts from '@/components/layouts'
import Image from "next/image";
import SignUpImg from '@/assets/img/signup.png';
import Button from '@/components/button';
import Input from '@/components/input';
import { useRouter, usePathname } from 'next/navigation'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { auth } from "../../../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignUpPage() {
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      fname: e.target.fname.value,
      lname: e.target.lname.value,
      pwd: e.target.pwd.value,
      confirm_pwd: e.target.confirm_pwd.value,
    }

  }
  
    return (
      <main className='relative w-[100vw] h-[100vh]' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[1440px] h-[960px]'>
          <Image src={SignUpImg} alt="No Menu image" codemod="contain" layout="fixed" className="relative z-0 w-[100%] h-[100%]"/>
          <form className='absolute top-[196px] right-[150px] w-[428px] h-[480px]' onSubmit={(e)=>handleSubmit(e)}>
            <h1 className='text-black-0 text-[32px] font-montserrat leading-[35.2px] text-cap font-[700] hidden'>Sign Up</h1>
            <Input className='mt-[2px] ml-[5px] py-[15px] pl-[25px] w-[80%] h-[48px] border-0 outline-0 text-black-3 font-poppins font-[400] text-[16px] leading-[24px]' placeholder='Email' type='text' id='email'/>
            <Input className='mt-[23px] ml-[5px] py-[15px] pl-[25px] w-[80%] h-[48px] border-0 outline-0 text-black-3 font-poppins font-[400] text-[16px] leading-[24px]' placeholder='First Name' type='text' id='fname'/>
            <Input className='mt-[23px] ml-[5px] py-[15px] pl-[25px] w-[80%] h-[48px] border-0 outline-0 text-black-3 font-poppins font-[400] text-[16px] leading-[24px]' placeholder='Last Name' type='text' id='lname'/>
            <Input className='py-[15px] ml-[5px] pl-[25px] w-[80%] h-[48px] border-0 outline-0 text-black-3 font-poppins font-[400] text-[16px] leading-[24px] mt-[23px]' placeholder='Password' type='password' id='pwd'/>
            <Input className='py-[15px] ml-[5px] pl-[25px] w-[80%] h-[48px] border-0 outline-0 text-black-3 font-poppins font-[400] text-[16px] leading-[24px] mt-[23px]' placeholder='Confirm Password' type='password' id='confirm_pwd'/>
            <button className='w-[100%] h-[51px] mt-[100px] uppercase flex items-center rounded-sm bg-orange-1 border-[3px] border-orange-1 hover:bg-orange-2 transition-all duration-[1000ms] ease-in-out'><span className={`flex items-center font-montserrat font-bold text-[16px] leading-[19.2px] m-auto uppercase relative after:content-[''] after:absolute after:top-[-20px] after:left-[-40px] after:w-[190px] after:h-[60px] before:content-[''] before:absolute before:border-b-[3px] before:border-black-0 before:w-[0%] before:bottom-[-3px] hover:before:w-full before:transition-all before:duration-[1000ms] ease-in-out`}>Sign Up</span></button>
            {/* <Button varient='orange' text='Continue' className='w-[100%] h-[51px] mt-[94px]'/> */}
          </form>
        </div>
      </main>
    )
  }
  