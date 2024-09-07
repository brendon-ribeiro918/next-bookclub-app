"use client"

import {useState} from 'react'
import Layouts from '@/components/layouts'
import Image from "next/image";
import ScreenImg2 from '@/assets/img/screen2-img.png';
import Button from '@/components/button';
import { useRouter, usePathname } from 'next/navigation'

export default function Screen2() {
    const [varient, setVarient] = useState([true, false, false])
    const router = useRouter()
    return (
      <Layouts>
        <main className='text-center pt-[67px]'>
          <div className='flex justify-center' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <Image src={ScreenImg2} alt="No Menu image" codemod="contain" layout="fixed" className="w-[230px] h-[230px]"/>
          </div>
          <h1 className='text-black-0 text-[48px] font-montserrat leading-[52.8px] text-cap font-[700] my-[50px]' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">What is most important to you?</h1>
          <div className='flex items-center justify-center mb-[50px]' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1500">
            <Button varient={varient[0] && "black"} text='A Page Count' className='mr-[33px] w-[177px] h-[44px]'/>
            <Button varient={varient[1]} text='A Word Count' className='mr-[33px] w-[179px] h-[44px]'/>
            <Button varient={varient[2]} text='Communicating My Message' className='w-[334px] h-[44px]'/>
          </div>
          <div className='flex justify-center mt-[60px]' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="2000">
            <Button varient='orange' text='Continue' className='w-[210px] h-[51px]' onClick={()=>router.push('/screen-3-page')}/>
          </div>
        </main>
      </Layouts>
    )
  }
  