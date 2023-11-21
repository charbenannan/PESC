import React from 'react';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Team from './pages/teams';
import Contact from './pages/contact';


function App() {
  return (
    <div className="App">

     
    <BrowserRouter>
          <Routes>
            <Route index element={ <Home /> } />
            <Route path= "/" element={ <Home /> } />
            <Route path= "/home" element={ <Home /> } />
            <Route path="/about" element={ <About />}  />
            <Route path="/contact" element ={ <Contact /> } />
            <Route path="/services" element ={ <Services /> } />
            <Route path="/team" element={ <Team /> } />
            
          </Routes>
          
        
            </BrowserRouter>
    </div>
  );
}

export default App;
