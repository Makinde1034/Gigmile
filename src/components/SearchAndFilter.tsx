import React from 'react'
import Image from 'next/image'
import search from '../assets/images/search.svg'
import filter from '../assets/images/filter.svg'

function SearchAndFilter() {
  return (
    <div className="flex items-center justify-center lg:justify-between py-8">
      <h3 className="hidden lg:block font-semibold text-sm">Gigmile Captains on Working Capital Service Requests</h3>
      <div className="lg:block ">
        <div className="flex  items-center">
          <div className=" flex rounded-full flex-row items-center mr-3  w-[300px] pl-5 h-12 border border-[#D9DADE] focus-within:border-2 focus-within:border-deepBlue2">
            <input
              placeholder="Search captains, services...  "
              className=" w-full h-full outline-none rounded-full"
              type="text"
            />
            <div className="mr-3 mt-1">
              <Image src={search} />
            </div>
          </div>
          <div className="lg:hidden block">
            <Image height={20} width={20} src={filter} />
          </div>
          <div className='hidden lg:block'>
            <div className="flex items-center rounded-full flex-row items-center mr-3   pl-5 h-12 border border-[#D9DADE] focus-within:border-2 focus-within:border-deepBlue2">
              <p className="mr-3 text-sm">Filter by</p>
              <div className="mr-3 mt-0">
                <Image src={filter} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="lg:hidden block">
        <div className='flex items-center'>
          <div className='mr-3'>
            <Image height={30} width={30} src={search} />
          </div>
          <div>
            <Image height={30} width={30} src={filter} />
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default SearchAndFilter
