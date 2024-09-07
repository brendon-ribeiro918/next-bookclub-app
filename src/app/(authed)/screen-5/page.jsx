"use client"

import Layouts from '@/components/layouts'
import Image from "next/image";
import ScreenImg5 from '@/assets/img/screen5-img.png';
import Button from '@/components/button';
import { useRouter, usePathname } from 'next/navigation'
export default function Screen5Page() {
  const router = useRouter()

    return (
      <Layouts>
        <main className='text-center pt-[67px]' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <div className='flex justify-center'>
            <Image src={ScreenImg5} alt="No Menu image" codemod="contain" layout="fixed" className="w-[230px] h-[230px]"/>
          </div>
          <h1 className='text-black-0 text-[45px] font-montserrat leading-[52.8px] text-cap font-[700] my-[50px]'>How far along are you?</h1>
         
          <div className='flex justify-center items-center flex-wrap px-[20px] max-w-[708px] mx-auto'>
            <Button varient='black' text='Just a few ideas jotted down' className='mr-[20px] w-[326px] h-[44px]'/>
            <Button varient='' text='A rough outline exists' className='w-[252px] h-[44px]'/>
            <Button varient='' text='A few thoughts are written out' className='mt-[20px] mr-[20px] w-[341px] h-[44px]'/>
            <Button varient='' text='The book is well underway' className='mt-[20px] w-[301px] h-[44px]'/>
          </div>
          <div className='flex justify-center mt-[50px]'>
            <Button varient='orange' text='Continue' className='w-[210px] h-[51px]' onClick={()=>router.push('/screen-6')}/>
          </div>
        </main>
      </Layouts>
    )
  }
  