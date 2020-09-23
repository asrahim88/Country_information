import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react"
import Country from './Components/CountryInformation/Country';
import Cart from './Components/Cart/Cart';



function App() {
  const [countries, setCountries] = useState([]);
  const [sCountry, setScountry] = useState([])
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
     .then(res => res.json())
     .then(data =>setCountries(data))
     
    
  }, []);
  const handleAddCountry = (props)=>{
    console.log("Country added",props)
    const newScountry = [...sCountry, props];
    setScountry(newScountry);
  } 
  
  return (
    <div className="App">
    <h1 style={{
      border: " 5px solid red",
      width: "500px",
      marginLeft: "525px",
      padding: "25px",
      borderRadius: "20px",
      background: "black",
      color: "whitesmoke",
      boxShadow: "5px 5px 10px 5px gray"

    }}>Total Country: {countries.length}</h1>
    
    <Cart cart ={sCountry} ></Cart>
    <ul>
    {
      countries.map(country => <Country country = {country} handleAddCountry={handleAddCountry}  key = {country.alpha3Code}></Country>)
    }
    </ul>
      
    </div>
  );
}

export default App;
