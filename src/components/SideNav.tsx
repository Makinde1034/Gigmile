import React from 'react'
import Image from 'next/image'
import logo from '../assets/images/logo.svg'
import user from '../assets/images/user.svg'
import home from '../assets/images/home.svg'
import people from '../assets/images/people.svg'
import paper from '../assets/images/Paper.svg'
import dropDownImage from '../assets/images/req.svg'
import assetFinancing from '../assets/images/asset_financing.svg'
import workingCapital from '../assets/images/working-capital.svg'
import gift from '../assets/images/gift.svg'
import work from '../assets/images/Work.svg'
import assetMetrics from '../assets/images/Graph.svg'
import logout from '../assets/images/logout.svg'
import repayments from '../assets/images/Chart.svg'
import settings from '../assets/images/settings_3_line.svg'

function SideNav() {
  const sideNavLinks = [
    {
      title: 'Dashboard',
      to: '/home',
      icon: home,
    },
    {
      title: 'Captains',
      to: '/captain',
      icon: people,
    },
    {
      title: 'Service Requests',
      to: '/service',
      icon: paper,
      dropDown: dropDownImage,
    },
    {
      title: 'Asset Financing',
      to: '/asset-financing',
      icon: assetFinancing,
    },
    {
      title: 'Working Capital',
      to: '/working-capital',
      icon: workingCapital,
    },
    {
      title: 'Anciliary Services',
      to: '/anciliary-services',
      icon: gift,
    },
    {
      title: 'Service Partners',
      to: '/service-partners',
      icon: work,
    },
    {
      title: 'Asset Metrics',
      to: '/asset-metrics',
      icon: assetMetrics,
    },
    {
      title: 'Repayments',
      to: '/repayments',
      icon: repayments,
    },
    {
      title: 'Settings',
      to: '/repayments',
      icon: settings,
    },
   
  ]

  return (
    <div className="w-full bg-[#FFFFFF] z-50 relative">
      <div className="px-5 pt-5 w-full shadow-lg h-screen relative">
        <div className="lg:pl-5">
          <Image src={logo} />
        </div>
        <div className="w-full p-3 flex items-center  mt-5 rounded-lg bg-greyish">
          <div className="mr-3">
            <Image height={60} width={60} src={user} />
          </div>

          <div>
            <h3 className="font-bold text-base rob">Michael Essien</h3>
            <p className="text-sm">Administrator</p>
          </div>
        </div>
        <ul className="mt-5 pr-2 h-[500px] overflow-y-scroll">
          {sideNavLinks.map((item, index) => (
            <li
            key={index}
              className={`${
                index === 4 ? 'bg-[#F95D44] hover:bg-[#F95D44] py-2' : 'hover:bg-greyish'
              } flex items-center lg:pl-5 pl-2  cursor-pointer rounded-lg py-3`}
            >
              <div className="mr-5 mt-1">
                {' '}
                <Image height={20} width={20} src={item.icon} />
              </div>
              <p className={`${index === 4 ? 'text-[#FFFFFF]' :'text-[#474F54]'} rob font-normal text-sm mr-5 `}>
                {item.title}
              </p>
              {item.dropDown && <Image src={item.dropDown} />}
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-0 flex items-center px-10 w-full bg-greyish cursor-pointer  py-3">
        <Image src={logout} />
        <p className="ml-5 font-semibold font-sans font-semibold">Log out</p>
      </div>
    </div>
  )
}

export default SideNav
