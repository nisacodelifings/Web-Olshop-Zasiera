import React from "react";
import Content from "./Content";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="header">
      <img className="logo" src="https://raw.githubusercontent.com/nisacodelifings/Web-Olshop-Zasiera/e3c15b9843cc851e2b37cfac7e17ba7853a41b3b/images/lotus.png" />
      <h1 class="harga">Zasiera</h1>
      <h4>-Mukena Sahabat Muslimah-</h4>
      <h5 className="motto">by Susylawati Pandansari</h5>
<a style={{color:"white", textDecoration:"none"}} class="harga" href="https://www.instagram.com/mukena.zasiera/">Follow instagram kami</a>
  </div>
      <Content />
    </div>
  );
}
