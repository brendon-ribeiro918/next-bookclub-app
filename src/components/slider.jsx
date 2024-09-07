"use client"

import '@/assets/style/slider.css'
import React, { useEffect, useRef, useState } from 'react';
import { getAmountOfNodes, isNodeWithInDelta } from '@/utils/calcHelper';

export default function Slider({min, max, delta, className, variant, ...rest}) {
  
  const sliderRef = useRef(null);
  const [value, setValue] = useState(min);

  const nodes = Array.from({ length: getAmountOfNodes(min, max, delta) }, (_, index) => index + 1);

  useEffect(() => {
    if (sliderRef?.current) {
      sliderRef.current.value = value;
    }
  }, [value]);

  const handleSliderChange = () => {
    if (sliderRef?.current) {
      const newValue = sliderRef.current.value;
      setValue(newValue);
    }
  };

  useEffect(()=>{
    const sliderEl = sliderRef.current
    sliderEl.addEventListener("input", (event) => {
      const tempSliderValue = event.target.value; 
      const progress = ((tempSliderValue - sliderEl.min) / (sliderEl.max - sliderEl.min)) * 100;
      sliderEl.style.background = `linear-gradient(to right, #121212 ${progress}%, #D9D9D9 ${progress}%)`;
    })
  },[])

  return (
    <div className="slidecontainer" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
      <div className='relative'>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          className="slider relative z-[1]"
          id="myRange"
          ref={sliderRef}
          onChange={handleSliderChange}
        />
        <ul className='absolute top-[7px] z-[0] flex justify-between w-[100%]'>
          {nodes.map((item, index) => {
            const currentValue = Number(min) + Number(index * delta);
            const isActive = Number(value) > currentValue;
            const nodeDelta = delta === '50' ? 0.5 : 100;
            const isCurrentValue = isNodeWithInDelta(value, currentValue, nodeDelta);
            const content = `${currentValue}`;
            return (
              <li
                key={item}
                className={`relative w-[16px] h-[16px] rounded-full 
                  ${isActive ? 'bg-black-1' : 'bg-black-5'}`}
              ><p className={`absolute top-[33px] left-[50%] translate-x-[-50%] text-[15px] text-cap font-poppins leading-[22.5px]
              ${isCurrentValue ? 'text-black-4 font-[600]' : 'text-black-3 font-[400]'}`}>{content}</p></li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}
