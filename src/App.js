import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import Services from "./components/pages/Services"
import AboutUs from "./components/pages/AboutUs"
import SignUp from "./components/pages/SignUp"

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/aboutus" exact component={AboutUs} />
          <Route path="/signup" exact component={SignUp} />
        </Switch>
      </Router>
    </>
  )
}

export default App
