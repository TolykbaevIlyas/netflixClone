'use client'

import { Icon } from 'next/dist/lib/metadata/types/metadata-types'
import Image from 'next/image';
import React, { useState } from 'react'

interface IImg{
  id:number;
  src: string;
}

interface ICarousel {
  imgs: IImg[];
}

const Carousel = ({imgs}:ICarousel) => {

  const [currentImg, setCurrentImg] = useState(1);

  function clickHandler(){
    let width = 1080;
    Img.style.marginLeft = -120 + 'px';
    console.log("Hello")
    setCurrentImg(currentImg + 1);
  }

  return (
    <div className="flex flex-col">
      <ul className='flex overflow-hidden '>
        <p className='absolute p-10 cursor-pointer right-0' onClick={clickHandler}>##</p>
        {imgs.map((img) => 
          <Image alt={"Slider"} id={`Img${img.id}`} src={img.src} className=''/>)}
      </ul>

    </div>
  )
}

export default Carousel