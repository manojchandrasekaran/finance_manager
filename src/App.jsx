import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Goals from "./components/Goals";
import Navbar from "./components/Navbar";
import Nomatch from "./components/Nomatch";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="*" element={<Nomatch />} />
      </Routes>
    </>
  );
}

export default App;
