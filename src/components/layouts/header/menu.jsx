
import Image from "next/image";
import Link from "next/link";
import MenuIcon from '@/assets/img/menu.png';

export default function Menu() {

    return (
      <Link href="#" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
        <Image src={MenuIcon} alt="No Menu image" codemod="contain" layout="fixed" className="w-[30px] h-[17px]"/>
      </Link>
    )
  }
  