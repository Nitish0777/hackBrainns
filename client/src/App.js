import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import Footer from "./components/Layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      {/* <Footer /> */}
      <Routes>
        <Route path="/profile" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
