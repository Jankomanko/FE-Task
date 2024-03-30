import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/HeaderComponent/Header";
import Home from "./pages/Home";
import Footer from "./components/FooterComponent/Footer";




function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  ); 
}

export default App;
