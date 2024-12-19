import { HashRouter, Route, Routes } from "react-router-dom"
import Home from './Home/Home';
import Header from "./Header/Header";
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import Faqs from './Faqs/Faqs';
import NoPage from "./NoPage/NoPage";

import './App.css';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/gallery" element={<Gallery />} />
        <Route  path="/contact" element={<Contact />} />
        <Route  path = "/faqs" element={<Faqs />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App;
