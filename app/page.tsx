"use client"
import {Hero} from '@/components'
import {SearchBar} from '@/components'
import { ShowMoreCars } from '@/components'
import {CustomFilter} from '@/components'
import { fetchCars, generateCarImageUrl } from '@/utils'
import {CarCard} from '@/components'
import { fuels, yearsOfProduction } from '@/constants';
import { HomeProps } from '@/types'
import { useEffect,useState } from 'react'
import Image from 'next/image';

// export default function Home() {

//   const [allCars, setAllCars] = useState([]);
//   const [loading, setLoading] = useState(false);

//   //search states
//   const [manufacturer, setManuFacturer] = useState("");
//   const [model, setModel] = useState("");
//   //filter states
//   const [fuel, setFuel] = useState("");
//   const [year, setYear] = useState(2022);
//   //pagination states
//   const [limit, setLimit] = useState(10);
//   const getCars = async () => {
//   setLoading(true);
//   try {
//     const result = await fetchCars({
//       manufacturer: manufacturer || '',
//       year: year || 2022,
//       fuel: fuel || '',
//       limit: limit || 10,
//       model: model || '',
//     });
//     setAllCars(result);
//   } catch(error){
//    console.log(error);
//   } finally {
//    setLoading(false);
//   }
//   }
//   useEffect(() => {
//      console.log(year, fuel, limit, model, manufacturer )
//      getCars();
//   }, [year, limit, fuel, manufacturer, model])

//   const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  
//   console.log(allCars);

//   return (
//     <main className="overflow-hidden">
      
//       <Hero/>
//       <div className='mt-12 padding-x padding-y
//                     max-width' id='discover'>
//         <div className='home__text-container'>
//            <h1 className='text-4x1 font-extrabold'>Catalogue</h1>
//            <p>Explore the cars</p>
//         </div>

//         <div className='home__filter'>
//             <SearchBar setManufacturer={setManuFacturer} setModel={setModel}/>
//           <div className='home__filter-container'>
//             <CustomFilter title="fuel" options={fuels} setFilter={setFuel}/>
//             <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear}/>
//           </div>
//         </div>

//        {allCars.length > 0 ? (
//         <section>
//           <div className='home__cars-wrapper'>
//              {allCars?.map((car)=>(
//               <CarCard car={car}/>
//              ))}
//           </div>

//         {loading && (
//           <div className='mt-16 w-full flex-center'>
//             <Image
//             src="/loader.svg"
//             alt="loader"
//             width={50}
//             height={50}
//             className="object-contain"
//             />
//           </div>
//         )}

//         <ShowMoreCars
//             pageNumber={limit / 10}
//             isNext={limit > allCars.length}
//             //setLimit={setLimit}
//         />  
//         </section>
//        ): (
//         <div className='home__error-container'>
//           <h2 className='text-black text-x1 font-bold'>Oops, no results</h2>
//           <p>{allCars?.message}</p>
//         </div>
//        )}

//       </div>
//     </main>
//   )
// }



export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMoreCars
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length} setLimit={0}            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}