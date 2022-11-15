import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
