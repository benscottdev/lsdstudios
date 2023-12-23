import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Story from "./Pages/Story";
import Create from "./Pages/Create";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/story" element={<Story />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
}
export default App;
