import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, population, capital, flag} = props.country
    const handleAddCountry = props.handleAddCountry
    return (
        <div className="country">
            <img className="flag" src={flag} alt=""/>
            <h4>{name}</h4>
            <h5> Capital : {capital}</h5>
            <p> Total Population : {population}</p>
            <button className="add-btn" onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;