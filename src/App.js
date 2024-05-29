import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import ShopMain from "./components/ShopMain";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<ShopMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
