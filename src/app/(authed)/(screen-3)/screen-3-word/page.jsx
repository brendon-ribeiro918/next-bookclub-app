
import Layouts from '@/components/layouts'
import Image from "next/image";
import ScreenImg3 from '@/assets/img/screen3-img2.png';
import Button from '@/components/button';
import Slider from '@/components/slider';

export default function Screen3Page() {
    return (
      <Layouts>
        <main className='text-center pt-[67px]'>
          <div className='flex justify-center'>
          <Image src={ScreenImg3} alt="No Menu image" codemod="contain" layout="fixed" className="w-[230px] h-[230px]"/>
          </div>
          <h1 className='text-black-0 text-[48px] font-montserrat leading-[52.8px] text-cap font-[700] my-[50px]'>Word Count </h1>
          <Slider min="20000" max="80000" delta="10000"/>
          <div className='flex justify-center mt-[70px]'>
            <Button varient='orange' text='Continue' className='w-[210px] h-[51px]'/>
          </div>
        </main>
      </Layouts>
    )
  }
  