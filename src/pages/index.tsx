
import Layout from './Layout'
import WorkingCapital from '../components/WorkingCapital'
import TotalRequest from '../components/TotalRequest'
import ServiceRequest from '../components/ServiceRequest'
import SearchAndFilter from '../components/SearchAndFilter'
import Transactions from '../components/Transactions'

const IndexPage = () => {
  return (
    <Layout title="Gigmile | Working Capital">
      <section className="pt-8 flex lg:flex-row flex-col">
        <div className="lg:w-[40%] w-full mb-5 lg:pr-2">
          <div className="w-full  border rounded-lg border-[#D9DADE]">
            <WorkingCapital />
          </div>
        </div>
        <div className="lg:w-[60%] w-full grid gap-5 lg:grid-cols-2 lg:pl-2">
          <div className="mb-5  border rounded-lg border-[#D9DADE]">
            <TotalRequest />
          </div>
          <div className="  border rounded-lg border-[#D9DADE]">
            <ServiceRequest />
          </div>
        </div>
      </section>
      <section className='pb-5'>
        <SearchAndFilter />
        <Transactions />
      </section>
    </Layout>
  )
}

export default IndexPage
