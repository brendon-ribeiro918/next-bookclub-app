"use client"

import {useEffect} from "react"
import { usePathname } from 'next/navigation'
import '@/assets/style/globals.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RootLayout({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <html lang="en">
      <body>
        <div className={pathname.includes('screen-9') ? '': pathname.includes('screen-10') ? 'bg-[#F1F1F1]' : pathname.includes('login') ? '': 'max-w-[1440px] px-[155px] mx-auto'}>
          <div className={pathname.includes('screen-10') ? "max-w-[1440px] px-[155px] mx-auto": pathname.includes('login') ? "max-w-[1440px]":""}>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
