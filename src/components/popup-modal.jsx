
import Input from "./input";

export default function Modal({className, type, ...rest}) {
    return (
     <div className="text-center w-[441px] h-[358px]">
      <p className="font-montserrat font-[600] text-[24px] text-cap leading-[26.4px] mb-[40px]">How many words have you <br/>written today?</p>
      <Input className='w-[120px] h-[64px] py-[23px] px-[37.5px] font-montserrat font-[600] text-[24px] leading-[26.4px] text-black-0'/>
      <div className='flex justify-center mt-[50px]'>
        <Button varient='orange' text='Continue' className='w-[210px] h-[51px]'/>
      </div>
     </div>
    )
  }
  