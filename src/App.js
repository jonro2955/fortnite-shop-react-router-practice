import React, { Component } from 'react';
/* Must run the cli command 'npm i react-router-dom' to install the 
react-router-dom package for this project before importing its modules*/
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Shop from './components/Shop';
import ItemDetail from './components/ItemDetail';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <Navbar />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route
            path='/'
            element={<Shop />}
          />
          <Route path='/:itemID' element={<ItemDetail />} />
        </Routes>
      </HashRouter>
    );
  }
}
export default App;
