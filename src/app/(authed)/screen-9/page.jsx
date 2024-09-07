"use client"

import Layouts from '@/components/layouts'
import Image from "next/image";
import ScreenImg9 from '@/assets/img/screen9-img.png';
import Button from '@/components/button';
import { useRouter, usePathname } from 'next/navigation'


export default function Screen9Page() {
  const router = useRouter()

    return (
      <Layouts className='max-w-[1440px] px-[155px] mx-auto'>
        <main className='bg-white-1'>
          <div className='relative max-w-[1440px] pt-[54px] mx-auto'>
            <Image src={ScreenImg9} alt="No Menu image" codemod="contain" layout="fixed" className="relative z-0" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000"/>
            <div className='absolute z-10 text-center top-[92px] right-[150px] w-[750px] h-[625px]' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000">
              <h1 className='text-black-0 text-[32px] font-montserrat leading-[38.4px] text-cap font-[700] mb-[40px]'>It’s Here! Your Snapshot Of Your <br/>Journey To Your Book In 100 Days!</h1>
              <div className='flex justify-between items-center flex-wrap w-full pl-[20px] mt-[40px]'>
                <div className='flex w-[330px] h-[180px] mr-[20px] justify-center items-center shadow-[0px_4px_49px_0px_rgba(0,0,0,0.10)] m-auto rounded-sm bg-white'>
                  <div className='flex justify-center items-center h-[125px]'>
                    <div className='relative w-[125px] h-[125px] rounded-sm bg-blue-1'>
                      <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bebas text-orange-1 text-[80px] font-[400] leading-[100px] tracking-[-10px] w-[fit-content]'>70</p>
                    </div>
                    <p className='font-bebas text-black-1 text-[25px] font-normal leading-[32px] tracking-[-1.6px] ml-[20px] uppercase text-cap'>Writing <br/>Days</p>
                  </div>
                </div>
                <div className='flex w-[330px] h-[180px] justify-center items-center shadow-[0px_4px_49px_0px_rgba(0,0,0,0.10)] m-auto rounded-sm bg-white'>
                  <div className='flex justify-center items-center h-[125px]'>
                    <div className='relative w-[125px] h-[125px] rounded-sm bg-blue-1'>
                      <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bebas text-orange-1 text-[80px] font-[400] leading-[100px] tracking-[-10px] w-[fit-content]'>30</p>
                    </div>
                    <p className='font-bebas text-black-1 text-[25px] font-normal leading-[32px] tracking-[-1.6px] ml-[20px] uppercase text-cap'>Days Off</p>
                  </div>
                </div>
                <div className='flex w-[330px] h-[180px] mr-[20px] mt-[20px] justify-center items-center shadow-[0px_4px_49px_0px_rgba(0,0,0,0.10)] m-auto rounded-sm bg-white'>
                  <div className='flex justify-center items-center h-[125px]'>
                    <div className='relative w-[125px] h-[125px] rounded-sm bg-blue-1'>
                      <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bebas text-orange-1 font-[400] w-[fit-content]'>
                        <p className='text-[60px] leading-[55px] tracking-[-5px]'>500</p>
                        <p className='text-[20px] leading-[-10px] tracking-[-1.5px] font-[700] uppercase'>words</p>
                      </div>
                    </div>
                    <p className='font-bebas text-black-1 text-[25px] font-normal leading-[32px] tracking-[-1.6px] ml-[20px] uppercase text-cap'>Biggest <br/>Day</p>
                  </div>
                </div>
                <div className='flex w-[330px] h-[180px] mt-[20px] justify-center items-center shadow-[0px_4px_49px_0px_rgba(0,0,0,0.10)] m-auto rounded-sm bg-white'>
                  <div className='flex justify-center items-center h-[125px]'>
                    <div className='relative w-[125px] h-[125px] rounded-sm bg-blue-1'>
                      <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bebas text-orange-1 font-[400] w-[fit-content]'>
                        <p className='text-[60px] leading-[55px] tracking-[-5px]'>300</p>
                        <p className='text-[20px] leading-[-10px] tracking-[-1.5px] font-[700] uppercase'>words</p>
                      </div>
                    </div>
                    <p className='font-bebas text-black-1 text-[25px] font-normal leading-[32px] tracking-[-1.6px] ml-[20px] uppercase text-cap'>Average <br/>Day</p>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center mt-[40px]'>
                <p className='font-montserrat font-[700] text-[16px] text-cap leading-[19.2px] tracking-[-1px] text-[#5A5A5A] mr-[30px]'>SHARE RESULTS</p>
                <Button varient='orange' text='Continue' className='w-[210px] h-[51px]' onClick={()=>router.push('/screen-10')}/>
              </div>
            </div>
          </div>
        </main>
      </Layouts>
    )
  }
  