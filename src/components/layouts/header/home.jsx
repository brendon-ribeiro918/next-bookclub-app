
import Image from "next/image";
import Link from "next/link";
import LogoIcon from '@/assets/img/logo.png';

export default function Home() {

    return (
      <Link href="#" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
        <Image src={LogoIcon} alt="No Logo image" codemod="contain" layout="fixed" className="w-[116px] h-[90px]"/>
      </Link>
    )
  }
  