import React, { useEffect, useState } from 'react';
//API
import fetchCountriesData from '../api/countries';
//components
import CountryCard from "./CountryCard";
//utils
import {fuzzySearch} from "../utils/Search";
//styles
import styles from '../styles/Home.module.css';



const HomePage = () => {
    const [countriesData, setCountriesData] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCountriesData();
            setCountriesData(data);
        };

        fetchData();
    }, []);

    const filterCountries = (countries, searchTerm, selectedRegion) => {
        if (!searchTerm && !selectedRegion) {
            return countries;
        }
        if(!searchTerm && selectedRegion) {
            return countries.filter((country) => {
                const region = country.region.toLowerCase();
                return  (region === selectedRegion);
            });
        }
        return countries.filter((country) => {
            const name = country.name.common;
            const region = country.region.toLowerCase();
            return fuzzySearch(searchTerm, name) && (selectedRegion === '' || region === selectedRegion);
        });
    };

    const filteredCountries = filterCountries(countriesData, searchTerm, selectedRegion);
    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    return (
     <div className={styles['country-home']}>
         <div>
             <input
                 type="text"
                 placeholder="Search for a country..."
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
             />
             <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
                 <option value="">Filter by Region</option>
                 {regions.map((region) => (
                     <option key={region} value={region.toLowerCase()}>{region}</option>
                 ))}
             </select>
         </div>
         {filteredCountries && filteredCountries.map((country) => (
             <CountryCard country={country} />
         ))}
     </div>
  )
}

export default HomePage;
