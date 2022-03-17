import React, { Component } from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Shop from './components/Shop';
import ItemDetail from './components/ItemDetail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route
            path='/fortnite-shop-react-router-practice/'
            element={<Shop />}
          />
          <Route path='/:itemID' element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
