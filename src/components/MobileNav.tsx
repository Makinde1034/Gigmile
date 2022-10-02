import React from 'react'
import Image from 'next/image'
import logo from '../assets/images/logo.svg'
import menu from '../assets/images/menu.svg'
import { useToggleState } from '../state/toggle/hooks'

function MobileNav() {
  const { _toggleNav, state } = useToggleState()
  return (
    <div className='lg:hidden block'>
      <div className="p-5 flex items-center justify-between">
        <Image src={logo} />
        <div onClick={() => _toggleNav(!state.isNavOpen)}>
          <Image src={menu} />
        </div>
      </div>
    </div>
  )
}

export default MobileNav
