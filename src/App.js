import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Hotel from "./pages/Hotel";
import Jebs from "./pages/Jebs";
import Brique from "./pages/Brique";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brique" element={<Brique />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/jebs" element={<Jebs />} />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
