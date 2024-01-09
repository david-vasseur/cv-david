import react from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import Experience from './pages/Experience';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Knowledges' element={<Knowledges />} />
        <Route path='/Experience' element={<Experience />} />
        </Routes>
     </BrowserRouter>

    
    </div>
  );
}

export default App;
