import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import CustomFilter from '@/components/CustomFilter'



export default function Home() {
  return (
    <main className="overflow-hidden">
      
      <Hero/>
      <div className='mt-12 padding-x padding-y
                    max-width' id='discover'>
        <div className='home__text-container'>
           <h1 className='text-4x1 font-extrabold'>Catalogue</h1>
           <p>Explore the cars</p>
        </div>

        <div className='home__filter'>
            <SearchBar/>
          <div className='home__filter-container'>
            <CustomFilter/>
          </div>
        </div>
      </div>
    </main>
  )
}
