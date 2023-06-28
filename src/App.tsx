import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Auth, Home, Search } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
