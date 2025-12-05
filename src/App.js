import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
