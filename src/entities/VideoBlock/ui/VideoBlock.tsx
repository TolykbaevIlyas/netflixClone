import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface IVideoBlock{
  name: string;
  description: string;
  src: StaticImageData  ;
}

const VideoBlock = ({name,description,src}:IVideoBlock) => {
  return (
    <div className='border-2 border-transparent rounded-t-lg '>
        <div><Image className='rounded-t-lg' src={src} width={320} alt={"Photo"}/></div>
        <div className='border-2 border-t-transparent rounded-b-lg flex flex-col justify-center'>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
    </div>
  )
}

export default VideoBlock