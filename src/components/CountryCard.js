import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = (props) => {
    const country = props.country;
    const countryPageUrl = `/countries/${country.name.common}`;

    return (
        <Link to={countryPageUrl}>
            <div>
                {country.name.common}
                Population: {country['population']}
                Region: {country['region']}
                capital: {country['capital']}
            </div>
        </Link>
    )
}
export default CountryCard
