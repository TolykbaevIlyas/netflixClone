import { Carousel } from '@/shared/ui/Carousel'
import Image from 'next/image'
import img from './assets/dom.jpg'
import img2 from './assets/dom2.jpg'
import { Slider } from '@/features/Slider'
import { Catalog } from '@/widgets/Catalog'

export default function Home() {
  const imgs = [
    {id:1,image:img,title: "Forest", description:"About smt"},{id:2,image:img2,title: "Home", description:"About smb"},{id:3,image:img,title: "Snow",description:"About snow"}
  ]
  return (
    <main className="">
        <Slider slides={imgs}/>
        <Catalog/>
        HomePage
    </main>
  )
}
