import { Carousel } from '@/shared/ui/Carousel'
import Image from 'next/image'
import img from './assets/dom.jpg'
import img2 from './assets/dom2.jpg'

export default function Home() {
  const imgs = [
    {id:1,src:img,text: "Hello1"},{id:2,src:img2,text: "Hello2"},{id:3,src:img,text: "Hello3"}
  ]
  return (
    <main className="">
        <Carousel imgs={imgs}/>
        HomePage
    </main>
  )
}
