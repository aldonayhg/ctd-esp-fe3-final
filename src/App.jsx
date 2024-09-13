// src/App.jsx
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import { ContextGlobal } from "./Components/utils/global.context";


function App() {
  const { state } = useContext(ContextGlobal); 

  return (
    <div className={state.theme === "dark" ? "dark" : "light"}> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/dentist/:id" element={<Detail />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
