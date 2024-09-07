
import { LiaLongArrowAltRightSolid } from "react-icons/lia"

export default function Button({className, varient, type, text, ...rest}) {

    let btn_classes = '';
    switch (varient) {
      case 'orange':
          btn_classes = 'flex items-center rounded-sm bg-orange-1 border-[3px] border-orange-1 hover:bg-transparent transition-all duration-[1000ms] ease-in-out'
        break;
      case 'black':
        btn_classes = 'rounded-xsm bg-black-0 hover:bg-orange-1 transition-all duration-[1000ms] ease-in-out'
      break;
      default:
        btn_classes = 'rounded-xsm bg-transparent border-[2px] border-black-3 hover:bg-black-1 hover:border-black-1 transition-all duration-[1000ms] ease-in-out'
        break;
    }
    let text_classes = '';
    switch (varient) {
      case 'orange':
          text_classes = "flex items-center font-montserrat font-bold text-[16px] leading-[19.2px] m-auto uppercase relative after:content-[''] after:absolute after:top-[-20px] after:left-[-40px] after:w-[190px] after:h-[60px] before:content-[''] before:absolute before:border-b-[3px] before:border-black-0 before:w-[0%] before:bottom-[-3px] hover:before:w-full before:transition-all before:duration-[1000ms] ease-in-out"
        break;
      case 'black':
        text_classes = 'font-poppins font-[400] text-[20px] text-orange-1 text-cap hover:text-black-0'
      break;
      default:
        text_classes = 'font-poppins font-[400] text-[20px] text-black-3 text-cap hover:text-orange-1 transition-all duration-[1000ms] ease-in-out transition-all duration-[1000ms] ease-in-out'
        break;
    }

    return (
     <button className={`${btn_classes} ${className}`} type={type} {...rest}>
      <span className={text_classes}>{text}{varient === 'orange' && <LiaLongArrowAltRightSolid className="ml-[5px]"/>}</span>
     </button>
    )
  }
  