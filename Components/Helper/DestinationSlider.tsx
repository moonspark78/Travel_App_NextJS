import Image from 'next/image';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const responsive = {

    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1300, min: 764 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1
    }
};




const DestinationSlider = () => {
  return (
    <Carousel  
        additionalTransfrom={0}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        centerMode={false}
        infinite
        responsive={responsive}
        itemClass='item'
    
    >
        <div>
            <Image
                alt='destination'
                src="/images/d1.png"
                width={200}
                height={200}
                className='rounded-full mx-auto'
            />
            <h1 className='destination__h1'>New York</h1>
            <p className='destination__p'>Hotels</p>
        </div>
    </Carousel>
  )
}

export default DestinationSlider