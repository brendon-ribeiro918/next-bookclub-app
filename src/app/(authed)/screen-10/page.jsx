
import Layouts from '@/components/layouts'
import Image from "next/image";
import ScreenImg101 from '@/assets/img/last-1.png';
import ScreenImg102 from '@/assets/img/last-2.png';
import ScreenImg103 from '@/assets/img/last-3.png';
import ScreenImg104 from '@/assets/img/last-4.png';

export default function Screen10Page() {

    return (
      <Layouts>
      <main className='text-center pt-[67px]' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000">
        <div className=''>
          <Image src={ScreenImg101} alt="No Menu image" codemod="contain" layout="fixed" className="mb-[40px]"/>
          <Image src={ScreenImg102} alt="No Menu image" codemod="contain" layout="fixed" className="mb-[40px]"/>
          <Image src={ScreenImg103} alt="No Menu image" codemod="contain" layout="fixed" className="mb-[40px]"/>
          <Image src={ScreenImg104} alt="No Menu image" codemod="contain" layout="fixed" className="mb-[40px]"/>
        </div>
      </main>
    </Layouts>
    )
  }
  