import React from 'react'
import Image from 'next/image';

const Contact = () => {
  return (
    <div className='pt-[8rem] pb-[3rem]'>
        <h1 className='heading'>Contact</h1>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[3rem] pt-[1.3rem] '>
          <div>
            <Image 
                src="/images/c1.png"
                alt="fly"
                width={450}
                height={340}
                className='object-contain mx-auto p-[1rem]'
            />
          </div>
          <div className='flex items-center justify-center flex-col'>
            <h1 className='text-center w-[90%] lg:w-[70%] tracking-[0.1rem] mx-auto font-bold text-[20px] md:text-[30px] text-black opacity-70'>
              Get special offers and more from Traveler
            </h1>
            <p>Subscribe to see the secret deals prices drop the moment you sign up</p>
          </div>
        </div>
    </div>
  )
}

export default Contact