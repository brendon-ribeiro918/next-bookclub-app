
import Layouts from '@/components/layouts'
import Image from "next/image";
import ScreenImg3 from '@/assets/img/screen3-img3.png';
import ScreenImg31 from '@/assets/img/screen3-img3-1.png';
import ScreenImg32 from '@/assets/img/screen3-img3-2.png';
import ScreenImg33 from '@/assets/img/screen3-img3-3.png';

import Button from '@/components/button';

export default function Screen3Page() {
    return (
      <Layouts>
        <main className='text-center pt-[67px]'>
          <div className='flex justify-center'>
            <Image src={ScreenImg3} alt="No Menu image" codemod="contain" layout="fixed" className="w-[230px] h-[230px]"/>
          </div>
          <h1 className='text-black-0 text-[48px] font-montserrat leading-[52.8px] text-cap font-[700] my-[50px]'>That's Great!</h1>
          <p className='text-black-4 text-[25px] text-cap font-[400] font-poppins leading-[37.5px]'>Prioritizing your message above all else is important.</p>
          <p className='text-black-4 text-[15px] text-cap font-[400] font-poppins leading-[24px] my-[50px]'>To help in goal setting, which type of book do you feel like might communicate your message most effectively?</p>
          <div className='flex justify-between items-center max-w-[921px] min-h-[72px] mx-auto'>
            <div className='relative block'>
              <Image src={ScreenImg31} alt="No Menu image" codemod="contain" layout="fixed" className="absolute top-[-10px] left-[-50px] z-[10] w-[65px] h-[65px]"/>
              <Button varient='black' text='Short and Sweet' className='w-[203px] h-[44px]'/>
            </div>
            <div className='relative block'>
              <Image src={ScreenImg32} alt="No Menu image" codemod="contain" layout="fixed" className="absolute top-[-10px] left-[-50px] z-[10] w-[72px] h-[72px]"/>
              <Button varient='' text='Modest and Meaningful' className='w-[276px] h-[44px]'/>
            </div>
            <div className='relative block'>
              <Image src={ScreenImg33} alt="No Menu image" codemod="contain" layout="fixed" className="absolute top-[-10px] left-[-50px] z-[10] w-[72px] h-[72px]"/>
              <Button varient='' text='Thick and Thorough' className='w-[238px] h-[44px]'/>
            </div>
          </div>
          <div className='flex justify-center mt-[50px]'>
            <Button varient='orange' text='Continue' className='w-[210px] h-[51px]'/>
          </div>
        </main>
      </Layouts>
    )
  }
  