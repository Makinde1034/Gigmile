import React from 'react'
import Image from 'next/image'

import graph from '../assets/images/red_graph.svg'
import polygon from '../assets/images/polygon.svg'


function TotalRequest() {
  
  return (
    <div>
      <header className=" border-b px-5 py-5 border-[#D9DADE]">
        <div className="flex flex-row items-center">
          <span className="ts rounded-sm py-1 px-2 mr-3">
            <Image height={18} width={18} src={graph} />
          </span>
          <h3 className="font-bold  font-sans">Total Request Value</h3>
        </div>
        <p className="text-[#A5A7A9] font-medium text-sm mt-2">Overall Working Capital Request Value </p>
      </header>
      <div className="px-5 py-5">
        <p className="text-sm text-[#A5A7A9]  font-semibold">
          Overall: <span className="font-bold text-[#000000] ml-2 text-lg">N 2,643,890.0</span>{' '}
        </p>
      </div>
      <div className="mt-5 py-5">
        <p className="text-center text-sm mb-2 text[#474F54]">Total paid back:</p>
        <h3 className="text-center font-bold text-2xl">N 1,200,210.0</h3>
        <p className="text-center text-[#A0AEC0] text-sm mt-2">
          <Image src={polygon} /> <span className="text-[#1DB385]">300,000.00 </span>Increase this week
        </p>
      </div>
    </div>
  )
}

export default TotalRequest
