import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import Footer from "./components/Layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Faq from "./components/Faq/Faq";
import Sponser from "./components/Sponser/Sponser";
function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Home />
      <About />
      <Contact />
      <Faq />
      <Sponser />
      <Footer />
      <Routes>
        <Route path="/profile" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
