import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from "./layout/mainLayout";
import Catalog from "./containers/catalog/catalog";
import About from "./containers/about/about";
import Contact from "./containers/contact/contact";
import MainContainer from "./containers/mainContainer/mainContainer";
import './App.css';
import './assets/styles/styles.scss'

function App() {
  return (
      <>
          <Router>
              <Routes>
                  <Route path={'/catalog/:type'} element={<MainLayout children={<Catalog />} />} />
                  <Route path={'/about'} element={<MainLayout children={<About />} />} />
                  <Route path={'/contacts'} element={<MainLayout children={<Contact/>} />} />
                  <Route path={'/maroon'} element={<MainLayout children={<MainContainer />} />} />
              </Routes>
          </Router>
      </>

  );
}

export default App;
