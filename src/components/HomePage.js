import React, { useEffect, useState } from 'react';
//API
import fetchCountriesData from '../api/countries';
//components
import CountryCard from "./CountryCard";

const HomePage = () => {
    const [countriesData, setCountriesData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCountriesData();
            setCountriesData(data);
        };

        fetchData();
    }, []);

    return (
     <>
         {countriesData && countriesData.map((country) => (
             <CountryCard country={country} />
         ))}
     </>
  )
}

export default HomePage;
