import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Nav/Navbar';
import Hero from './components/Hero/Hero';
import Homepage from './pages/homepage/Homepage';
import Aboutus from './components/Aboutus/Aboutus';
import Contactus from './components/Contactus/Contactus';
import Error from './pages/Error/Error404';
import Login from './pages/acc_creation/Login.js';
import Signup from './pages/acc_creation/Signup';
import Dashboard from './pages/dashboard/Dashboard';
import Single from './components/Single/Single';
import Store from './pages/Store/Store';
import Store2 from './pages/Store/Store-list-view';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <Homepage /> 
    //    <Dashboard /> 
    //   <Single /> 
    //   <Aboutus /> 
    //   <Footer />
    
    
    // </div>
    <Router>
    <div className="App">
     <Navbar />
    <Routes>
          <Route exact path='/' element={< Homepage />}></Route>
          <Route exact path='/about' element={< Aboutus />}></Route>
          <Route exact path='/contact' element={< Contactus />}></Route>
          <Route exact path='/store' element={< Store />}></Route>
          <Route exact path='/store2' element={< Store2 />}></Route>

   </Routes>
   <Footer />
   </div>
</Router>
  );
}

export default App;
