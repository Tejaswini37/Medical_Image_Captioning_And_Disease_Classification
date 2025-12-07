import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import LLMpage from "./components/LLMpage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/llmmodel" element={<LLMpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
