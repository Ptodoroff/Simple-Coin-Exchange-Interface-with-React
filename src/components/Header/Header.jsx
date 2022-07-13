import React, { Component } from 'react';
import logo from "../../logo.svg";
import './styles.css';

export default class Header extends Component {
  render() {
    return (
<header className="App-header">
<img src={logo} alt="React Logo" className="App-logo"/>
<h1 className= "App-title">Coin Exchange</h1>
</header>
    )
  }
}
