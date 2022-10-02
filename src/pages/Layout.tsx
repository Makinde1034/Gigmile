import React, { ReactNode } from 'react'
// import Link from 'next/link'
import Head from 'next/head'
import SideNav from '../components/SideNav'
import Nav from '../components/Nav'
import MobileNav from '../components/MobileNav'
import { useToggleState } from '../state/toggle/hooks'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Gigmile' }: Props) => {
  const { state } = useToggleState()

  console.log(state)

  return (
    <div className="w-full max-w-screen-2xl mx-auto m-auto ">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link rel="stylesheet" /> */}
        <link rel="icon" href="../assets/images/logo.svg" />
      </Head>
      <div className="flex ">
        <div className={`w-[300px] lg:block  ${state.isNavOpen ? 'block' : 'hidden'}`}>
          <div className="fixed z-50">
            <SideNav />
          </div>
        </div>
        <div className="w-full z-10">
          <Nav />
          <MobileNav />
          <div className="px-5 lg:px-12">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Layout
