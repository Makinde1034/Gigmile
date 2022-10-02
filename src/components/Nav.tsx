import React from 'react'
import search from '../assets/images/search.svg'
import Image from 'next/image'
import check from '../assets/images/check.svg'
import bell from '../assets/images/Bell_pin.svg'
import userImage from '../assets/images/user.svg'
import arrow from '../assets/images/arrow.svg'


function Nav() {
  return (
    <div className='hidden lg:block'>
      <nav className="mt-5 lg:px-12  flex items-center justify-between w-full  bg-[#FFFFFF]">
        <h3 className="font-bold text-[#00000] mr-3 lg:block hidden rob">Hello Micheal!  &#128075;</h3>
        <div className="flex items-center lg:visible invisible">
          <div className="bg-greyish flex rounded-lg flex-row items-center mr-3  w-[400px] pl-5 h-10 focus-within:border-2 focus-within:border-deepBlue2">
            <div className="mr-3 mt-1">
              <Image src={search} />
            </div>
            <input placeholder="Search" className="bg-greyish w-full h-full outline-none rounded-lg" type="text" />
          </div>
          <div className="mr-3">
            <Image height={20} src={check} />
          </div>
          <div className="mr-3">
            <Image height={22} src={bell} />
          </div>
          <div className="mr-2">
            <Image src={userImage} />
          </div>
          <div className="mb-2">
            <Image src={arrow} />
          </div>
        </div>
        
      </nav>
    </div>
  )
}

export default Nav
