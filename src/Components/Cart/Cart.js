import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce((sum, country)=> sum + country.population,0)
    const style = {
        border: "5px solid red",
        width: "500px",
        marginLeft: "540px",
        background: "black",
        borderRadius: "20px",
        boxShadow: "5px 5px 10px 5px gray",
        padding: "10px",
        color: "white"

    }

    return (
        <div style = {style}>
            <h1>Country added:{cart.length} </h1>
            <h5>Total Population of Added Country: {totalPopulation}</h5>
        </div>
    );
};

export default Cart;