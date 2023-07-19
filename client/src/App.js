import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import "./App.css";

import "font-awesome/css/font-awesome.min.css";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Routes>
        <Route path="/profile" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
