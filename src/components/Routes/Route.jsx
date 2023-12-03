import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./../NotFound/NotFound";
import Header from "../Header/Header";
import Body from "../Body/Body";
import RegistrationForm from "../registration/Registration";
import CustomerForm from "../customer/Customer";

import Footer from "../Footer/Footer";
import ThanYouPage from "../Pages/ThankYouPage/ThanYouPage";
import ShopPage from "../Pages/ShopPage/ShopPage";
import SearchResultPage from "../Pages/SearchResultPage/SearchResultPage";
import ProductPage from "../Pages/ProductPage/ProductPage";
import FAQ from "../Pages/FAQ/FAQ";
import ContactPage from "../Pages/Contact/ContactPage";
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import CartPage from "../Pages/CartPage/CartPage";
import ShopDetailsPage from "../shopDetails/shopDetails";
import ProductDetailsPage from "../productDetails/productDetails";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="registration" element={<RegistrationForm />} />
        <Route path="customer" element={<CustomerForm />} />
        <Route path="thanyouPage" element={<ThanYouPage />} />
        <Route path="shopPage" element={<ShopPage />} />
        <Route path="searchResultPage" element={<SearchResultPage />} />
        <Route path="productPage" element={<ProductPage />} />
        <Route path="fAQ" element={<FAQ />} />
        <Route path="contactPage" element={<ContactPage />} />
        <Route path="checkoutPage" element={<CheckoutPage />} />
        <Route path="/categoryPage/:categoryId" element={<CategoryPage />} />
        <Route path="cartPage" element={<CartPage />} />
        <Route path="/shopDetails" element={<ShopDetailsPage />} />
        <Route path="/productDetails" element={<ProductDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
