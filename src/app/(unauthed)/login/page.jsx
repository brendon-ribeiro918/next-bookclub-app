"use client"


import Layouts from '@/components/layouts'
import Image from "next/image";
import LoginImg from '@/assets/img/login.png';
import Button from '@/components/button';
import Input from '@/components/input';
import { useRouter, usePathname } from 'next/navigation'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function LoginPage() {
  const router = useRouter()
  
    return (
      <main className='relative w-[100vw] h-[100vh]' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[1440px] h-[960px]'>
          <Image src={LoginImg} alt="No Menu image" codemod="contain" layout="fixed" className="relative z-0 w-[100%] h-[100%]"/>
          <div className='absolute top-[240px] right-[150px] w-[428px] h-[480px]'>
            <h1 className='mb-[40px] text-black-0 text-[32px] font-montserrat leading-[35.2px] text-cap font-[700] hidden'>Login</h1>
            <Input className='mt-[60px] py-[20px] pl-[30px] w-[100%] h-[51px] border-0 outline-0 text-black-3 font-poppins font-[400] text-[16px] leading-[24px]' placeholder='Username' type='text'/>
            <Input className='py-[20px] pl-[30px] w-[100%] h-[51px] border-0 outline-0 text-black-3 font-poppins font-[400] text-[16px] leading-[24px] mt-[20px]' placeholder='Password' type='password'/>
            <button className='w-[100%] h-[51px] mt-[100px] uppercase flex items-center rounded-sm bg-orange-1 border-[3px] border-orange-1 hover:bg-orange-2 transition-all duration-[1000ms] ease-in-out' onClick={()=>router.push('/screen-1')}><span className={`flex items-center font-montserrat font-bold text-[16px] leading-[19.2px] m-auto uppercase relative after:content-[''] after:absolute after:top-[-20px] after:left-[-40px] after:w-[190px] after:h-[60px] before:content-[''] before:absolute before:border-b-[3px] before:border-black-0 before:w-[0%] before:bottom-[-3px] hover:before:w-full before:transition-all before:duration-[1000ms] ease-in-out`}>login</span></button>
            {/* <Button varient='orange' text='Continue' className='w-[100%] h-[51px] mt-[94px]'/> */}
            <p className='absolute top-[105%] right-0 cursor-pointer text-[16px] font-[600] text-right text-black-3 hover:text-black-0 transition-all duration-[1000ms] ease-in-out' onClick={()=>router.push('/signup')}>To Sign-Up page</p>
          </div>
        </div>
      </main>
    )
  }
  