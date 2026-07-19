import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result/:id" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;