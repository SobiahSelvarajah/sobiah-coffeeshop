import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Menu from './pages/menu/Menu';
import FindUs from './pages/findUs/FindUs';
import NotFound from './pages/notFound/NotFound';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='menu' element={<Menu/>}/>
        <Route path='findUs' element={<FindUs/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;