import React from 'react';
import './Country.css'
const Country = (props) => {

  
    const {name, capital, population, region, flag} = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className = "country">
            <div className = "information">
            <h1>{name}</h1>
            <h2>Capital: {capital}</h2>
            <h3>Population: {population}</h3>
            <h4>Region: {region}</h4>
            <p></p>
            <button style = {{
                width: "130px",
                height: "40px",
                backgroundColor: "green",
                color: 'white',
                cursor: "pointer"
            }} onClick ={()=> handleAddCountry (props.country)}>Add Country</button>
            </div>
            <div className = "flag">
            <img src={flag} alt=""/>
            </div>

        </div>
    );
};

export default Country;