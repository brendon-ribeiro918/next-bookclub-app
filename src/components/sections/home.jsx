
import Image from "next/image";

import Button from "../button";
import HomeImg from '@/assets/img/dash-img1.jpg';

export default function Home() {
    return (
      <section className="custom3Xl:max-w-[1920px] pb-[80px] pt-[40px] px-[80px] mx-auto flex justify-between items-center" id="home">
        <div className="mr-[55px] text-left w-[846px]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" >
          <h1 className="text-[64px] text-blue-1 leading-[77.45px] mb-[17px] font-bold">Gotta Pitch? Go Qreate! <span className="text-[50px] leading-[60.51px]">entertainment pitch deck</span></h1>
          <p className="text-[23px] text-white-0 leading-[43.57px] font-bold mb-[52px]">Choose a platform that helps you build the right deck for your Film, TV, or Series. <span className="font-[400]">A platform creator that focuses on the entertainment industry.</span></p>
          <p className="text-[23px] text-white-0 leading-[43.57px] mb-[25px]">Streamline your creation process by answering the right questions and allow <span className="font-bold">AI</span> to help you make <span className="font-bold">Treatments, Pitch Decks, & Pitch Bibles.</span></p>
          <Button text="GET STARTED" className="px-[25px] py-[12px] rounded-sm font-bold text-black-0 text-[18px] leading-[24.2px] bg-blue-1 border-[2px] border-blue-1 hover:bg-black-0 hover:text-white transition-all duration-[1000ms]"/>
        </div>
        <div className="" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1000">
          <Image src={HomeImg} alt="No Home image" objectFit="contain" layout="fixed" className="w-[833px] h-[600px] rounded-md"/>
        </div>
      </section>
    )
  }
  