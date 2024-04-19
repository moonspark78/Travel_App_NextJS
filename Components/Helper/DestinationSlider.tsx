import Image from 'next/image';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const responsive = {

    desktop: {
      breakpoint: { max: 3000, min: 1100 },
      items: 4,
      slidesToSlide:1,
    },
    tablet: {
      breakpoint: { max: 1100, min: 764 },
      items: 2,
      slidesToSlide:1,
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide:1,
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
        <div>
            <Image
                alt='destination'
                src="/images/d2.png"
                width={200}
                height={200}
                className='rounded-full mx-auto'
            />
            <h1 className='destination__h1'>Japan</h1>
            <p className='destination__p'>17 Hotels</p>
        </div>
        <div>
            <Image
                alt='destination'
                src="/images/d3.png"
                width={200}
                height={200}
                className='rounded-full mx-auto'
            />
            <h1 className='destination__h1'>Bangladesh</h1>
            <p className='destination__p'>3 Hotels</p>
        </div>
        <div>
            <Image
                alt='destination'
                src="/images/d4.png"
                width={200}
                height={200}
                className='rounded-full mx-auto'
            />
            <h1 className='destination__h1'>India</h1>
            <p className='destination__p'>27 Hotels</p>
        </div>
        <div>
            <Image
                alt='destination'
                src="/images/d5.png"
                width={200}
                height={200}
                className='rounded-full mx-auto'
            />
            <h1 className='destination__h1'>England</h1>
            <p className='destination__p'>7 Hotels</p>
        </div>
        <div>
            <Image
                alt='destination'
                src="/images/d6.png"
                width={200}
                height={200}
                className='rounded-full mx-auto'
            />
            <h1 className='destination__h1'>Australia</h1>
            <p className='destination__p'>8 Hotels</p>
        </div>
    </Carousel>
  )
}

export default DestinationSlider