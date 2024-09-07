"use client"

import Layouts from '@/components/layouts'
import Image from "next/image";
import ScreenImg1 from '@/assets/img/screen1-img.png';
import Button from '@/components/button';
import { useRouter, usePathname } from 'next/navigation'
export default function Screen1() {
  const router = useRouter()
    return (
      <Layouts>
        <main className='flex items-center pt-[67px]'>
           <Image src={ScreenImg1} alt="No Menu image" codemod="contain" layout="fixed" className="w-[472px] h-[577px]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500"/>
           <div className='text-center ml-[98px]' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
            <h1 className='text-black-0 text-[64px] font-montserrat leading-[74.5px] font-[800] mb-[60px]'>Hi Ryan Vet!</h1>
            <p className='text-black-3 text-[20px] font-poppins leading-[30px] font-[400]'>Let's get started with creating your custom plan<br/>for writing a book in 100 Days</p>
            <div className='flex justify-center mt-[60px]'>
             <Button varient="orange" text='Continue' className='w-[210px] h-[51px]' onClick={()=>router.push('/screen-2')}/>
            </div>
           </div>
        </main>
      </Layouts>
    )
  }
  