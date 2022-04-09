import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Errorpage from "./components/Errrorpage";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route>
          <Errorpage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
