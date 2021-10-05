import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {

    const [countries, setCountry] = useState([]);

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON`)
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])

    return (

        <div className="card-parent">
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Countries;