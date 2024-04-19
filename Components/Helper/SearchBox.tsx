import { CalendarDaysIcon, MapIcon } from '@heroicons/react/16/solid'
import { MapPinIcon } from '@heroicons/react/20/solid'
import React from 'react'

const SearchBox = () => {
  return (
    <div className='bg-white rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-[1.6rem]
    mt-[3rem] w-[80%]'>
      {/* First search Input */}
      <div className='flex items-center space-x-2'>
        <MapIcon className='w-[1.4rem] h-[1.4rem] text-red-600'/>
        <div>
          <p className='text-[18px] font-semibold mb-[0.2rem]'>Location</p>
          <input
            className='outline-none border-none'
            type="text" 
            placeholder='Where are you going?'
          />
        </div>
      </div>
      {/* Second search Input */}
      <div className='flex items-center space-x-5'>
        <CalendarDaysIcon className='w-[1.5rem] h-[1.5rem] text-red-600'/>
        <div>
          <p className='text-[18px] font-semibold mb-[0.2rem]'>Start Date</p>
          <input
            className='outline-none border-none'
            type="date" 
            placeholder='Where are you going?'
          />
        </div>
      </div>
      {/* Third search Input */}
      <div className='flex items-center space-x-6'>
        <CalendarDaysIcon className='w-[1.5rem] h-[1.5rem] text-red-600'/>
        <div>
          <p className='text-[18px] font-semibold mb-[0.2rem]'>End Date</p>
          <input
            className='outline-none border-none'
            type="date" 
            placeholder='Where are you going?'
          />
        </div>
      </div>
      {/* Fourth search Input */}
      <div className='flex items-center space-x-6'>
        <CalendarDaysIcon className='w-[1.5rem] h-[1.5rem] text-red-600'/>
        <div>
          <p className='text-[18px] font-semibold mb-[0.2rem]'>End Date</p>
          <p className="text-[18px] font-normal">1 Guest 1 Room</p>
        </div>
      </div>
    </div>
  )
}

export default SearchBox