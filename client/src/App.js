import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/profile" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
