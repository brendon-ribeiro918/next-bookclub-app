'use client'

import Image from "next/image";
import Author1 from '@/assets/img/author-1.png';
import Author2 from '@/assets/img/author-2.png';
import { usePathname } from 'next/navigation'

export default function Footer(props) {
  const pathname = usePathname()
  return (
    <footer className={`${pathname.includes('screen-9') ? `bg-white-1` : `bg-transparent ${props.className}`}`}>
      {pathname.includes('screen-1') && !(pathname.includes('screen-10')) ? (
        <div className="pt-[46px] pb-[66px] pl-[430px]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
          <di className='text-center'>
            <p className="text-black-3 text-[14px] leading-[15.4px] font-[500] font-montserrat pb-[20px] text-cap uppercase">Powered by</p>
            <div className="flex justify-center">
              <Image src={Author1} alt="No Author image" codemod="contain" layout="fixed" className="w-[146px] h-[34px]"/>
            </div>
          </di>
        </div>
      ) : (
        <div className={pathname.includes('screen-9') ? props.className : ''}>
          <div className={`flex items-center ${pathname.includes('screen-9') || pathname.includes('screen-10')? `pt-0` : `pt-[142px]`} pb-[50px] pl-[1005px]`} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
            <p className="text-black-3 text-[10px] leading-[11px] font-[500] font-montserrat pr-[5px]">Powered by</p>
            <Image src={Author2} alt="No Author image" codemod="contain" layout="fixed" className="w-[65px] h-[15px]"/>
          </div>
        </div>
      )}
    </footer>
  )
}
