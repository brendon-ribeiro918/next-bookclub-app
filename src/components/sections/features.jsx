
import Image from "next/image";

import RectangleImg from '@/assets/img/rectangle.png';

export default function Features() {
    return (
      <section className="custom3Xl:max-w-[1920px] py-[80px] pl-[107px] pr-[90px] mx-auto text-white-0" id="features">
        <h1 className="font-[800] text-[40px] leading-[48px] mb-[74px]" data-aos="fade">FEATURES</h1>
        <div className="flex flex-wrap justify-between">
        <div className="w-[810px]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <div className="flex items-center">
            <Image src={RectangleImg} alt="No Benefits image" objectFit="contain" layout="fixed" className="w-[56px] h-[53px] mr-[30px]"/>
            <h2 className="text-blue-1 text-[30px] font-[800] leading-[48px]">AI GENERATION</h2>
          </div>
          <p className="text-[20px] font-[400] leading-[48px] mt-[23px]">Utilize our AI presentation tool within Go Qreate to effortlessly generate editable slides without the need for a steep learning curve. Streamline your workflow by automatically crafting slides in a familiar process.</p>
        </div>
        <div className="w-[810px]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <h2 className="text-blue-1 text-[30px] font-[800] leading-[48px]">ALWAYS WITH YOU</h2>
          <p className="text-[20px] font-[400] leading-[48px] mt-[23px]">Your presentations are stored in the cloud, enabling access from any device. Whether you are on your computer, phone, or tablet, you can easily present or edit your content.</p>
        </div>
        <div className="w-[810px] pt-[130px]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">
          <h2 className="text-blue-1 text-[30px] font-[800] leading-[48px]">MEDIA LIBRARY</h2>
          <p className="text-[20px] font-[400] leading-[48px] mt-[23px]">All media that you upload is available in your personal media library. <br/>You can use all types of media on store.</p>
        </div>
        <div className="w-[810px] pt-[130px]" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000">
          <h2 className="text-blue-1 text-[30px] font-[800] leading-[48px]">VERTICAL SLIDES</h2>
          <p className="text-[20px] font-[400] leading-[48px] mt-[23px]">Create vertical slides for vertical one-pagers, treatments, and vertical presentations. <br/>Using the vertical sildes will be more effective and intuitive.</p>
        </div>
        <div className="w-[810px] pt-[130px]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <h2 className="text-blue-1 text-[30px] font-[800] leading-[48px]">SLIDE TEMPLATE</h2>
          <p className="text-[20px] font-[400] leading-[48px] mt-[23px]">Save any slide as a template for easy reuse.
          <br/>Once you save the slide template, you will be in use of them.</p>
        </div>
        <div className="w-[810px] pt-[130px]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <h2 className="text-blue-1 text-[30px] font-[800] leading-[48px]">PDF EXPORT</h2>
          <p className="text-[20px] font-[400] leading-[48px] mt-[23px]">Export any presentation to PDF at the click of a button. Great for printing.<br/>You will be able to export any type of PDF files.</p>
        </div>
        </div>
      </section>
    )
  }
  