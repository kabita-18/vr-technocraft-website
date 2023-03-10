import "./App.css";
import Header from "./Components/Header/Header.jsx";
import ProductImage from "./Components/ProductImage/ProductImage";
import ProductNews from "./Components/ProductNews/ProductNews";
import Products from "./Components/Products/Products";
import Testimonial from "./Components/Testimonials/Testimonial";
import Footer from "./Components/Footer/Footer";
import Clients from "./Components/Clients/Clients";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductImage />
      <ProductNews />
      <Products />

      <Testimonial />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
