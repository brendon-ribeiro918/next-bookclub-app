
import Image from "next/image";
import Link from "next/link";
import ProfileIcon from '@/assets/img/profile.png';

export default function Profile() {

    return (
      <Link href="#">
        <Image src={ProfileIcon} alt="No Profile image" codemod="contain" layout="fixed" className="w-[34px] h-[34px]"/>
      </Link>
    )
  }
  