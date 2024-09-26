// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Cockpit from "./component/card";
import Clock from "./component/clock";
import Photo from "./component/photo";
import New from "./component/newclock";
import ProductCard from "./component/product";
import Store from "./component/store";
import "./assets/css/app.css";

import Arado from "./assets/airforce1.jpg";
import Arado2 from "./assets/jet1.jpg";
import Aayush from "./component/condition";
import Login from "./component/login";
import Fresh from "./component/freshlogin";
import Product from "./component/product";
import Search from "./component/search";
import Fitness from "./component/theme";
import { ThemeContext } from "./context/themeContext";
import Age from "./component/age";
import Items from "./component/items";
import User from "./component/newitems";
import Count from "./component/count";
import Todos from "./component/todos";

function App() {
  return (
    <ThemeContext.Provider value="dark">
      {/* <Todos /> */}
      {/* <Count />
      <Age />
      <User></User> */}
      <div>
        <Cockpit />
        <h1>Theme</h1>
        <Items></Items>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
