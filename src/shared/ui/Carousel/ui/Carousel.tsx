'use client'

import { Icon } from 'next/dist/lib/metadata/types/metadata-types'
import Image from 'next/image';
import React from 'react'

interface IImg{
  id:number;
  src: string;
}

interface ICarousel {
  imgs: IImg[];
}

const Carousel = ({imgs}:ICarousel) => {
  return (
    <div className="inline-block">
      <ul className=''>
        {imgs.map((img) => <Image alt={"Slider"} src={img.src}/>)}
      </ul>
    </div>
  )
}

export default Carousel