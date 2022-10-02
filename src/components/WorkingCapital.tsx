import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import graph from '../assets/images/green_graph.svg'

import pep from '../assets/images/pep.svg'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

function WorkingCapital() {
  const data = ({
    
    options: {
      colors: ['#1DB385'],
      chart: {
        id: 'basic-bar',
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + '%'
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ['#304758'],
          },
        },
      },
      xaxis: {
        categories: [['Repair Advance'], ['Fuel Advance'], ['Salary Advance']],
      },
      legend: {
        show: false
      }
    },

    series: [
      {
        name: 'Overall',
        data: [60, 40, 45],
      },
    ],
  })

  return (
    <div className="z-10 ">
      <header className=" border-b px-5 py-5 border-[#D9DADE]">
        <div className="flex flex-row items-center">
          <span className="cs rounded-sm py-1 px-2 mr-3">
            <Image height={18} width={18} src={graph} />
          </span>
          <h3 className="font-bold text- font-sans">Working Capital Service Requests</h3>
        </div>
        <p className="text-[#A5A7A9] font-medium  text-sm mt-2">
          Ongoing Gigmile Working Capital Service Requests <span>Last 30 days</span>{' '}
        </p>
      </header>
      <div className="px-5 py-5 flex items-center">
        <div className="mr-2">
          {' '}
          <Image src={pep} />
        </div>

        <p className="text-sm font-semibold text-[#A5A7A9]">
          Overall: <span className="font-bold text-[#000000] ml-2 text-lg">678,765</span>
        </p>
      </div>
      <div className="mt-[-20px] v overflow-x-auto ">
        {typeof window !== 'undefined' && (
          <Chart options={data.options} series={data.series} type="bar" width="450" height="200" />
        )}
      </div>
    </div>
  )
}

export default WorkingCapital
