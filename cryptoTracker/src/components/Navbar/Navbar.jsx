import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { setcurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd":
        setcurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setcurrency({ name: "eur", symbol: "€" });
        break;
      case "jpy":
        setcurrency({ name: "jpy", symbol: "¥" });
        break;
      default:
        setcurrency({ name: "usd", symbol: "$" });
        break;
    }
  };

  return (
    <div className='navbar'>
      <Link to={`/`}>
        <img src={logo} alt="" className='logo' />
      </Link>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/about`}>About</Link>
        </li>

      </ul>
      <div className='nav-right'>
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="jpy">JPY</option>
        </select>
        <button>Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
