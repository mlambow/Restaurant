import Featured from '@/components/Featured'
import Offer from '@/components/Offer'
import Slider from '@/components/Slider'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=''>
      <Slider />
      <Featured />
      <Offer />
    </div>
  )
}
