import React from 'react'
import './App.css';
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home';
import Objective from './pages/Objective'
import Activities from './pages/Activities'
import Qualification from './pages/Qualification'



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/objective' component={Objective} />
          <Route path='/activities' component={Activities} />
          <Route path='/qualifications' component={Qualification} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
