import logo from './logo.svg';
import './App.css';
import{useState} from 'react';
import react from 'react';
import {Route} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Nav from './Nav';
import Contacts from './Contacts';
function App() {
  
  return (
    <div className="App">
      <Nav/>

      <Route path="/"><Home/></Route>
      <Route path="/About"><About/></Route>
      <Route path="/Contacts"><Contacts/></Route>
 
     
    </div>
  );
}

export default App;
