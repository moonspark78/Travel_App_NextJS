import Image from 'next/image';
import React from 'react'



interface Props{
    image: string;
    name: string;
    city: string;
    reviewNum: string;
    price: string;
}

const HotelCard = ({price, image, reviewNum, city, name}:Props) => {
  return (
    <div className='cursor-pointer bg-white rounded-md overflow-hidden'>
        <div className='relative overflow-hidden w-[100%] h-[20rem]'>
            <Image
                src={`${image}`}
                alt={name}
                className='transform object-cover transition-all duration-700 scale-100 hover:scale-125'
                layout='fill'
            />
        </div>
    </div>
  )
}

export default HotelCard