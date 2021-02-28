import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Country/Country";
import Cart from "./components/Cart/Cart";

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  const handleAddCountry = (counrty) => {
    const newCart = [...cart, counrty];
    setCart(newCart);
  };
  return (
    <div className="App">
      <h1>Countries Loaded : {countries.length}</h1>
      <div className="main-menu">
        <div className="countries">
          {countries.map((country) => (
            <Country
              handleAddCountry={handleAddCountry}
              country={country}
            ></Country>
          ))}
        </div>
        <div className="selected-countries">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
