
import Image from "next/image";

import BenefitsImg from '@/assets/img/dash-img2.png';

export default function Benefits() {
    return (
      <div className="bg-white-0">
        <section className="custom3Xl:max-w-[1920px] py-[80px] pl-[107px] pr-[93px] mx-auto flex justify-between items-center text-black-0" id="benefits">
          <div className="mr-[70px]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
            <Image src={BenefitsImg} alt="No Benefits image" objectFit="contain" layout="fixed" className="w-[835px] h-[600px] rounded-md"/>
          </div>
          <div className="mr-[55px] text-left w-[846px]" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1500" >
            <h1 className="font-['Inknut Antiqua'] text-[38px] leading-[90.27px] font-[400]">Why Are Visual Pitches Important Today?</h1>
            <p className="text-[20px] leading-[48px] font-[400] mt-[20px] w-[810px]">A pitch is a visually concise document informing producers and executives about your entertainment project. It outlines genre, tone, characters, story, and the writer’s clear vision for the direction of the project.</p>
            <p className="text-[20px] leading-[48px] mt-[50px] mb-[20px] font-[800]">BENEFITS</p>
            <div className="flex flex-wrap pl-[60px]">
              <ul className="text-[18px] font-[400] leading-[40px] list-disc">
                <li className="">Visual Representation</li>
                <li className="">Quick Engagement</li>
                <li className="">Stand out from the competition</li>
                <li className="">Roadmap of project</li>
              </ul>
              <ul className="text-[18px] font-[400] leading-[40px] list-disc ml-[150px]">
                <li className="">Easily Updated and Shared</li>
                <li className="">Raises Anticipation of project</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    )
  }
  