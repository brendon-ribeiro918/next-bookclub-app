"use client"

import Layouts from '@/components/layouts'
import Image from "next/image";
import ScreenImg3 from '@/assets/img/screen3-img1.png';
import Button from '@/components/button';
import Slider from '@/components/slider';
import { useRouter, usePathname } from 'next/navigation'

export default function Screen3Page() {
  const router = useRouter()
    return (
      <Layouts>
        <main className='text-center pt-[67px]'>
          <div className='flex justify-center' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
          <Image src={ScreenImg3} alt="No Menu image" codemod="contain" layout="fixed" className="w-[230px] h-[230px]"/>
          </div>
          <h1 className='text-black-0 text-[48px] font-montserrat leading-[52.8px] text-cap font-[700] my-[50px]' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">Page Count </h1>
          <Slider min="50" max="300" delta="50"/>
          <div className='flex justify-center mt-[70px]' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
            <Button varient='orange' text='Continue' className='w-[210px] h-[51px]' onClick={()=>router.push('/screen-4')}/>
          </div>
        </main>
      </Layouts>
    )
  }
  