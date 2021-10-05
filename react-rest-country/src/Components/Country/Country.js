import React from 'react';
import './Country.css'
import './Storage'
import { addToDb } from './Storage';

const Country = (props) => {

    const { name, region, numericCode, population, flag, capital } = props.country;

    return (
        <div className="card">
            <aside>
                <img style={{ width: "200px", height: "140px" }} src={flag} alt=""></img>
            </aside>

            <aside>
                <h3>Country: {name}</h3>
                <h5>Capital city: {capital}</h5>
                <h5>Population: {population}</h5>
                <h5>Region: {region}</h5>
                <button onClick={() => addToDb(numericCode)}>add to local</button>
            </aside>
        </div>
    );
};
// 
export default Country;