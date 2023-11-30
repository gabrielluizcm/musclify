import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/Login"
import HomePage from "./pages/Home";
import RoutinesPage from "./pages/Routines";

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center
      bg-gradient-to-tr from-pine-tree from-20% to-onyx">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/treinos" element={<RoutinesPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
