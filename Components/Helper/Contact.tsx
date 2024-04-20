import React from 'react'
import Image from 'next/image';

const Contact = () => {
  return (
    <div className='pt-[8rem] pb-[3rem]'>
        <h1 className='heading'>Contact</h1>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[3rem] pt-[1.3rem] '>
            <Image 
                src="/images/c1.png"
                alt="fly"
                width={450}
                height={340}
                className='object-contain mx-auto p-[1rem]'
            />
        </div>
    </div>
  )
}

export default Contact