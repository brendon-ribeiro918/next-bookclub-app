"use client"

import Layouts from '@/components/layouts'
import Image from "next/image";
import ScreenImg4 from '@/assets/img/screen4-img.png';
import Button from '@/components/button';
import { useRouter, usePathname } from 'next/navigation'

export default function Screen4Page() {
  const router = useRouter()

    return (
      <Layouts>
        <main className='text-center pt-[67px]' data-aos="fade" data-aos-duration="1000" data-aos-delay="1000">
          <div className='flex justify-center'>
            <Image src={ScreenImg4} alt="No Menu image" codemod="contain" layout="fixed" className="w-[230px] h-[230px]"/>
          </div>
          <h1 className='text-black-0 text-[45px] font-montserrat leading-[52.8px] text-cap font-[700] my-[50px]'>Have you started writing your book yet?</h1>
          <div className='flex justify-center items-center'>
            <Button varient='black' text='YES' className='mr-[20px] w-[74px] h-[44px]'/>
            <Button varient='' text='NO' className='w-[70px] h-[44px]'/>
          </div>
          <div className='flex justify-center mt-[50px]'>
            <Button varient='orange' text='Continue' className='w-[210px] h-[51px]' onClick={()=>router.push('/screen-5')}/>
          </div>
        </main>
      </Layouts>
    )
  }
  