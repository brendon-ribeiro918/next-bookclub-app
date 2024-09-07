"use client"

import Layouts from '@/components/layouts'
import Image from "next/image";
import ScreenImg7 from '@/assets/img/screen7-img.png';
import Button from '@/components/button';
import { useRouter, usePathname } from 'next/navigation'

export default function Screen7Page() {
  const router = useRouter()

    return (
      <Layouts>
        <main className='text-center pt-[67px]' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">
          <div className='flex justify-center'>
            <Image src={ScreenImg7} alt="No Menu image" codemod="contain" layout="fixed" className="w-[230px] h-[230px]"/>
          </div>
          <h1 className='text-black-0 text-[32px] font-montserrat leading-[52.8px] text-cap font-[700] my-[50px]'>That’s great! Select all the following that apply to <br/>the topic of this book!</h1>
          <div className='flex justify-center items-center flex-wrap'>
            <Button varient='black' text='Recorded Podcast or News Interviews' className='mr-[20px] w-[413px] h-[44px]'/>
            <Button varient='' text='Articles or Papers You’ve Written' className='w-[361px] h-[44px]'/>
            <Button varient='' text='Recorded Lectures or Workshops You’ve Presented' className='mt-[20px] w-[543px] h-[44px]'/>
            <Button varient='' text='Voice Memos or Miscellaneous Notes Relevant to Your Topic' className='mt-[20px] w-[637px] h-[44px]'/>
          </div>
          <div className='flex justify-center mt-[50px]'>
            <Button varient='orange' text='Continue' className='w-[210px] h-[51px]' onClick={()=>router.push('/screen-8')}/>
          </div>
        </main>
      </Layouts>
    )
  }
  