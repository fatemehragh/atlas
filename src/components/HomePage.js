import React, { useEffect, useState } from 'react';
//API
import fetchCountriesData from '../api/countries';
//components
import CountryCard from "./CountryCard";
//styles
import styles from '../styles/Home.module.css';



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
     <div className={styles['country-home']}>
         {countriesData && countriesData.map((country) => (
             <CountryCard country={country} />
         ))}
     </div>
  )
}

export default HomePage;
