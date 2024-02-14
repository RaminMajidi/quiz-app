import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Quiz from "./pages/Quiz";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/quiz" element={<Quiz/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
};

export default App