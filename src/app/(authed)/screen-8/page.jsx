"use client"

import { useState, useEffect } from 'react';
import Layouts from '@/components/layouts'
import Image from "next/image";
import ScreenImg8 from '@/assets/img/screen8-img.png';
import { useRouter, usePathname } from 'next/navigation'


export default function Screen8Page() {
  const router = useRouter()

    const [loading, setLoading] = useState(true);
    const [idx, setIdx] = useState(0);

    const nodes = Array.from({ length: 8 }, (_, index) => index + 1);
    useEffect(() => {
      setTimeout(() => {
        // setLoading(false);
        setIdx(prev => prev + 1);
      }, 2000);
    });

    useEffect(()=>{
      setTimeout(() => {
        router.push('/screen-9')
      }, 15000);
    },[])
    return (
      <Layouts>
        <main className='text-center pt-[67px]' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000">
          <div className='flex justify-center'>
            <Image src={ScreenImg8} alt="No Menu image" codemod="contain" layout="fixed" className="w-[371px] h-[230px]"/>
          </div>
          <h1 className='text-black-0 text-[32px] font-montserrat leading-[52.8px] text-cap font-[700] my-[50px]'>Processing...</h1>
          <div className='flex justify-between items-center w-[241px] mx-auto'>
            {nodes.map((item, index) => (
              <div key={item} className={`w-[17px] h-[17px] rounded-full border-[1px] border-black-0 mr-[15px] ${(idx%8) === index ? 'bg-orange-1' : 'bg-transparent'}`}></div>
            ))}
          </div>
          <p className='font-poppins text-black-4 font-[500] italic text-[20px] text-cap leading-[30px] mt-[34px]'>Writing a book is like a marathon, but with more paper cuts!</p>
        </main>
      </Layouts>
    )
  }
  