import './App.css';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {menuContext} from "./components/Hooks/MenuContext";
import CoreModels from './components/Coremodels/CoreModel';
import { useState } from 'react';
import UserPanel from './components/UserPanel/UserPanel';
import StockPanel from './components/stocks/StockPanel';
import ItemCategory from './components/itemCategory/Panel';




function App() {
  const [hamBurger, setHamBurger] = useState(false);

  return (
    <>
  <menuContext.Provider value={{hamBurger, setHamBurger}}>

    <Routes>
      <Route path="/" element={<NavBar />}>
      <Route path='/coremodel' element={<CoreModels />} />
        <Route path='/userpanel' element={<UserPanel />} />
        <Route path='/stockpanel' element={<StockPanel />} />
        <Route path='/item-category' element={<ItemCategory />} />
     
      </Route>
    </Routes>
    </menuContext.Provider>

    </>
  );
}

export default App;
