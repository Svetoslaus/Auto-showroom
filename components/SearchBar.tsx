"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Router from "next/router";
import router from "next/router";
 
const SearchBar = () => {
const [manufacturer, setManufacturer] = useState('');
const [model, setModel] = useState('');
const router = useRouter();
const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(manufacturer === '' && model === ''){
      return alert("Please fill the fields")
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
   
  }

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

     if(manufacturer){
      searchParams.set('manufacturer', manufacturer)
    } else {
      searchParams.delete('manufacturer')
    }
    if(model){
      searchParams.set('model', model)
    } else {
      searchParams.delete('model')
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathname)
  }

  const SearchButton = ({otherClasses}: {otherClasses: string}) => (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
       <Image
       src="/magnif-glass.png"
       alt="glass"
       width={40}
       height={40}
       className="object-contain" 
       >
       </Image>
    </button>
  );

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
         manufacturer={manufacturer}
         setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses='sm:hidden'/>
      </div>

      <div className="searchbar__item">
        <Image 
        src="/"
        width={25}
        height={25}
        className="absolute w-[20-px] h-[20-px] ml-4"
        alt="car model"
        />
      <input
       type='text'
       name='model'
       value={model}
       onChange={(event) => setModel(event.target.value)}
       className="searchbar__input"
      />  
      <SearchButton otherClasses="sm:hidden"/>
      </div>
      <SearchButton otherClasses="max-sm:hidden"/>
    </form>
  )
} 

export default SearchBar;
