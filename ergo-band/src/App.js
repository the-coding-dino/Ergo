import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Band from "./pages/Band";
import Shop from "./pages/Shop";
import Epk from "./pages/Epk";
import BookUs from "./pages/BookUs";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="Main-App-Style">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/band" element={<Band />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/epk" element={<Epk />} />
          <Route path="/book" element={<BookUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
