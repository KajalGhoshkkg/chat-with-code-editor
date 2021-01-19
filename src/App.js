import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
// import { Grid } from "@material-ui/core";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Chat from "./components/pages/Chat";
import CodeCollab from './components/code collab/index'
import Error from "./components/pages/Error";
import fire from "./Fire";

const App = () => {
  console.log(fire.database());
  return (
    <>
      <Navbar className="navClass" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/CodeCollab" component={CodeCollab} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
