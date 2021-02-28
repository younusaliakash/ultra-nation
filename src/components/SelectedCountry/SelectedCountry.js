import React from 'react';
import './SelectedCountry.css'

const SelectedCountry = (props) => {
    const {name, flag, capital, population ,region, subregion,area} = props.country
    return (
        <div className="single-country">
            <img className="flag" src={flag} alt=""/>
            <h4>{name}</h4>
            <h5> Capital : {capital}</h5>
            <p> Region: {region}</p>
            <p> Sub-Region: {subregion}</p>
            <p> Total Population : {population}</p>
            <p> Area : {area}</p>
        </div>
    );
};

export default SelectedCountry;