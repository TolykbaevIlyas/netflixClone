import { Carousel } from '@/shared/ui/Carousel'
import Image from 'next/image'
import img from './assets/dom.jpg'
import img2 from './assets/dom2.jpg'
import { Slider } from '@/features/Slider'

export default function Home() {
  const imgs = [
    {id:1,image:img,title: "Hello1"},{id:2,image:img2,title: "Hello2"},{id:3,image:img,title: "Hello3"}
  ]
  return (
    <main className="">
        <Slider slides={imgs}/>
        HomePage
    </main>
  )
}
