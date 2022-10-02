import React from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })


function ServiceRequest() {
  const series = [44, 55, 41, 17]
  const options = ({
    labels: ['Repair', 'Fuel ', 'Salary '],
    plotOptions: {
      pie: {
        customScale: 1.07,
        dataLabels: {
        
        },
        donut: {
          size: '83%',
          // background: '#0D0D0C',
          labels: {
            show: false,
            name: {
              show: true,
              fontSize: '22px',
              fontWeight: 600,
              color: 'rgba(252, 252, 252, 0.87)',
              offsetY: -5,
              formatter: (value) => {
                return value
              },
            },
            value: {
              show: true,
              fontSize: '22px',
              fontWeight: 400,
              color: 'rgba(252, 252, 252, 0.87)',
              offsetY: 5,
              formatter: (value) => {
                return value
              },
            },
            total: {
              show: true,
              showAlways: true,
              label: 'Total Value',
              fontSize: '12px',
              fontWeight: 600,
              color: 'rgba(252, 252, 252, 0.6)',
              // formatter: (w) => {
              //   const totalValue: number = w.globals.seriesTotals.reduce((a, b) => {
              //     return a + b
              //   }, 0)
              //   return `$ ${abbreviateNumber(totalValue.toFixed(2))}`
              // },
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
      formatter: (value) => {
        return `$ ${value}`
      },
    },
    colors: ['#FB6654', '#3285FF', '#1DB385', '#F9883A'],
    fill: {
      pattern: {
        style: 'verticalLines',
        width: 6,
        height: 6,
        strokeWidth: 0,
      },
    },
    stroke: {
      show: false,
      // curve : 'stepline'
    },
    legend: {
      show:false,
      labels: {
        colors: '#fff',
      },
    },
    // labels: [],
  })

  return (
    <div>
      <header className=" border-b px-5 py-5 border-[#D9DADE]">
        <div className="flex flex-row items-center">
          {/* <span className="ts rounded-sm py-1 px-2 mr-3"><Image height={18} width={18} src={graph} /></span> */}
          <h3 className="font-bold  font-sans">Service Requests Breakdown</h3>
        </div>
        <p className="text-[#A5A7A9] font-medium  text-sm mt-2">Total Working Captal Requests so far. </p>
      </header>
      <div className='w-full flex justify-center py-5'>
        {typeof window !== 'undefined' && (
          <Chart options={options} series={series} type="donut" width={300} height={200} />
        )}
      </div>
    </div>
  )
}

export default ServiceRequest
