import { VideoBlock } from '@/entities/VideoBlock'
import React from 'react'
import img from '@/app/assets/dom.jpg'

const Catalog = () => {
    const catalof = [
        {id:1,name:"smt", description:"asdf",src:img},
        {id:2,name:"smt", description:"asdf",src:img},
        {id:3,name:"smt", description:"asdf",src:img},
        {id:4,name:"smt", description:"asdf",src:img},
        {id:5,name:"smt", description:"asdf",src:img},
    ]
  return (
    <div className='pt-10 flex justify-center flex-wrap gap-10'>
        {catalof.map((cat)=><VideoBlock name={cat.name} description={cat.description} src={cat.src}/>)}
    </div>
  )
}

export default Catalog