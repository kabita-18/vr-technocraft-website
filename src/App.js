import "./App.css";
import Header from "./Components/Header/Header.jsx";
import ProductImage from "./Components/ProductImage/ProductImage";
import ProductNews from "./Components/ProductNews/ProductNews";
import Products from "./Components/Products/Products";
import Testimonial from "./Components/Testimonials/Testimonial";
import Footer from "./Components/Footer/Footer";
import Clients from "./Components/Clients/Clients";
import Privacy from "./Components/Privacy&Policy/Privacy";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TermsandConditions from "./Components/Terms&conditions/TermsandConditions";
function Home() {
  return (
    <>
      <ProductImage />
      <ProductNews />
      <Products />

      <Testimonial />
      <Clients />
    </>
  );
}
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsandConditions />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
