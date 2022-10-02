import React, { useState } from 'react'
import icon from '../assets/images/Icon.svg'
import arrowLeft from '../assets/images/arrow-left.svg'
import arrowRight from '../assets/images/arrowRight.svg'
import Image from 'next/image'

function Transactions() {
  const [activeTab, setActiveTab] = useState(0)
  const [activeIndex, setActiveIndex] = useState(null)
  const [openDetailsBox, setOpenDetailsBox] = useState(false)

  const tabs = [
    {
      title: 'Active',
    },
    {
      title: 'Pending',
    },
    {
      title: 'Completed',
    },
    {
      title: 'Declined',
    },
  ]

  const captainInfo = [
    {
      captain: 'Tolu Makinde',
      workingCapital: 'Fuel Advance',
      totalRequest: '100,000.00',
      totalBalance: '108,000.00',
    },
    {
      captain: 'Alan Richardson',
      workingCapital: 'Repair Advance',
      totalRequest: '100,500.00',
      totalBalance: '1,40000.00',
    },
    {
      captain: 'Aron Paul',
      workingCapital: 'Repair Advance',
      totalRequest: '1,500,000.00',
      totalBalance: '1,080,000.00',
    },
    {
      captain: 'Micheal Scott',
      workingCapital: 'Fuel Advance',
      totalRequest: '1,500,000.00',
      totalBalance: '1,080,000.00',
    },
    {
      captain: 'Micheal Scott',
      workingCapital: 'Fuel Advance',
      totalRequest: '120,000.00',
      totalBalance: '280,000.00',
    },
    {
      captain: 'Steve Carell',
      workingCapital: 'Fuel Advance',
      totalRequest: '1,500,000.00',
      totalBalance: '1,080,000.00',
    },
  ]

  const handleDetails = (index: number) => {
    setOpenDetailsBox(true)
    setActiveIndex(index)
  }
  return (
    <div>
      {/* <div className="w-full   border-t border-l border-r border-[#D9DADE] rounded-lg pt-5 overflow-x-scroll">
        <nav className=" border-b h-10 border-[#D9DADE] px-5 ">
          <ul className="flex h-full ">
            {tabs.map((item, index) => (
              <li
                onClick={() => setActiveTab(index)}
                className={`${
                  activeTab === index && 'border-[#1DB385] border-b-2  text-[#000000]'
                } mr-5 text-[#A0AEC0] font-semibold px-3 cursor-pointer `}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </nav>
        <table className="w-full overflow-x-scroll">
          <thead>
            <tr className="flex overflow-x-auto justify-between w-full px-5 py-5">
              <th className="flex  text-[#A0AEC0] text-sm font-normal lg:justify-start justify-center lg:w-[25%]">
                Captain
              </th>
              <th className="flex text-[#A0AEC0] text-sm  font-normal justify-start lg:w-[25%]">Working Capital</th>
              <th className="flex text-[#A0AEC0] text-sm font-normal justify-start lg:w-[25%]">Total Request Value</th>
              <th className="flex text-[#A0AEC0] text-sm font-normal  justify-start lg:w-[25%]">Total Balance</th>
              <th className="flex text-[#A0AEC0]  text-sm  font-normal justify-start lg:w-[25%]"></th>
            </tr>
          </thead>
          <tbody className="">
            {captainInfo.map((item, index) => (
              <tr className=" z-40 rw lg:w-full overflow-x-scroll justify-between flex items-center px-5 cursor-pointer  border-b-1 border-[#D9DADE] py-4">
                <td className="flex  font-normal justify-start w-[25%]">
                  <div className="hidden lg:block">
                    <div className="items-center  justify-center flex rounded-full h-8 w-8 bg-[#1DB385] mr-3">
                      <p className="text-[#FFFFFF] text-sm font-semibold">
                        {item.captain.split(' ')[0][0]}
                        {item.captain.split(' ')[1][0]}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#000000] text-sm mt-1 font-semibold">{item.captain}</p>
                </td>
                <td className="flex font-normal  pt-2 rob lg:text-sm text-xs justify-start lg:w-[25%]">
                  {item.workingCapital}
                </td>
                <td className="flex  font-normal rob  lg:text-sm text-xs   justify-start lg:w-[25%]">
                  ₦{item.totalRequest}
                </td>
                <td className="flex  font-normal rob lg:text-sm text-xs   justify-start lg:w-[25%]">
                  ₦{item.totalBalance}
                </td>
                <td className="flex z-40 relative  font-normal rob lg:text-sm text-xs   justify-start lg:w-[25%]">
                  <div onClick={() => handleDetails(index)} className="menu">
                    <Image src={icon} />
                  </div>
                  {openDetailsBox && activeIndex === index && (
                    <div className="z-50 absolute left-0 top-[-10px] bg-[#FFFFFF] rounded-lg shadow p-3">
                      <p>View more details</p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-5 pb-10">
        <span className="mr-5 px-3 py-2 cursor-pointer">
          <Image src={arrowLeft} />
        </span>
        <span className="mr-5 bg-[#F1F3F6] px-3 py-2 rounded-sm font-semibold cursor-pointer">1</span>
        <span className="mr-5 px-3 py-2 font-semibold cursor-pointer">2</span>
        <span className="mr-5 px-3 py-2 font-semibold">...</span>
        <span className="mr-5 px-3 py-2 font-semibold cursor-pointer">16</span>
        <span className="mr-5 px-3 py-2 cursor-pointer">
          <Image src={arrowRight} />
        </span>
      </div> */}
      {/* ******* */}
      {/* div class="container mx-auto px-4 sm:px-8"> */}
      <div className="py-8 overflow-auto border border-[#D9DADE] rounded-lg">
        <nav className=" border-b h-10 border-[#D9DADE] px-5 ">
          <ul className="flex h-full ">
            {tabs.map((item, index) => (
              <li
                onClick={() => setActiveTab(index)}
                className={`${
                  activeTab === index && 'border-[#1DB385] border-b-2  text-[#000000]'
                } mr-5 text-[#A0AEC0] font-semibold px-3 cursor-pointer `}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </nav>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 ">
          <div className="inline-block min-w-full overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="border-b border-[#D9DADE]">
                  <th className="px-5 py-3 bg-gray-100 text-left text-[#A0AEC0] text-xs  font-semibold  uppercase tracking-wider">
                    Captain
                  </th>
                  <th className="px-5 py-3  bg-gray-100 text-left text-[#A0AEC0] text-xs  font-semibold   uppercase tracking-wider">
                    Working Capital
                  </th>
                  <th className="px-5 py-3  bg-gray-100 text-left text-[#A0AEC0] text-xs  font-semibold  uppercase tracking-wider">
                    Total Request Value
                  </th>
                  <th className="px-5 py-3 bg-gray-100 text-left text-[#A0AEC0] text-xs  font-semibold  uppercase tracking-wider">
                    Total Balance
                  </th>
                  <th className="px-5 py-3  bg-gray-100"></th>
                </tr>
              </thead>
              <tbody>
                {captainInfo.map((item, index) => (
                  <tr className="border-b rw border-[#D9DADE] cursor-pointer">
                    <td className="px-5 py-5 bg-white text-sm">
                      <div className="flex">
                        <div className="flex-shrink-0 w-10 h-10">
                          <div className="items-center  justify-center flex rounded-full h-8 w-8 bg-[#1DB385] mr-3">
                            <p className="text-[#FFFFFF] text-sm font-semibold">
                              {' '}
                              {item.captain.split(' ')[0][0]}
                              {item.captain.split(' ')[1][0]}
                            </p>
                          </div>
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 font-bold whitespace-no-wrap">{item.captain}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 bg-white text-sm">
                      <p className="text-gray-900 font-semibold whitespace-no-wrap">{item.workingCapital}</p>
                    </td>
                    <td className="px-5 py-5  bg-white text-sm">
                      <p className="text-gray-900 font-semibold  whitespace-no-wrap"> ₦{item.totalBalance}</p>
                    </td>
                    <td className="px-5 py-5  bg-white text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                        <span className="relative"> ₦{item.totalRequest}</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 bg-white text-sm text-right">
                      <button type="button" className="relative inline-block text-gray-500 hover:text-gray-700">
                        <div onClick={() => handleDetails(index)} className="menu">
                          <Image src={icon} />
                        </div>
                        {openDetailsBox && activeIndex === index && (
                          <div className="z-50 absolute  left-[-100px] bg-[#FFFFFF] rounded-lg shadow p-3">
                            <p className='text-sm'>View more details</p>
                          </div>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transactions
