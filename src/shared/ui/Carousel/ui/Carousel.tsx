'use client'

import { Icon } from 'next/dist/lib/metadata/types/metadata-types'
import Image from 'next/image';
import React, { useState } from 'react'

interface IImg{
  id:number;
  src: string;
  text: string;
}

interface ICarousel {
  imgs: IImg[];
}

const Carousel = ({imgs}:ICarousel) => {

  const [currentImg, setCurrentImg] = useState(1);

  function clickHandlerRight(){
    if(currentImg < 3){
      let width = 1920;
      if(currentImg === 1){
        Img1.style.marginLeft = -width + 'px';
      }
      if(currentImg === 2){
        Img2.style.marginLeft = -width + 'px';
      }if(currentImg === 3){
        Img3.style.marginLeft = -width + 'px';
      }
      setCurrentImg(currentImg + 1);
      console.log(currentImg)
    }
  }

  function clickHandlerLeft(){
    if(currentImg <= 3){
      let width = 1920;
      if(currentImg === 1){
        Img1.style.marginRight = -width + 'px';
      }
      if(currentImg === 2){
        Img2.style.marginRight = -width + 'px';
      }if(currentImg === 3){
        Img3.style.marginRight = -width + 'px';
      }
      setCurrentImg(currentImg - 1);
    }

  }

  return (
    <div className="flex flex-col">
      <ul className='flex overflow-hidden '>
      <p className='absolute p-10 cursor-pointer left-0' onClick={clickHandlerLeft}>@@</p>
        <p className='absolute p-10 cursor-pointer right-0' onClick={clickHandlerRight}>##</p>
        {imgs.map((img) => 
            <Image alt={"Slider"} id={`Img${img.id}`} src={img.src} className=''></Image>)}
      </ul>

    </div>
  )
}

export default Carousel