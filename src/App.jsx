import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Hero";
import Contact from "./contact";
import About from "./About";
import ColorSwitcher from "./components/ColorSwitcher"; // ✅ add this

function App() {
  return (
    <Router>
      {/* ✅ Global Component (visible everywhere) */}
      <ColorSwitcher />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;