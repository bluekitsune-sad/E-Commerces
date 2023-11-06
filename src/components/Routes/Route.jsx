import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./../NotFound/NotFound";
import Header from "../Header/Header";
import Body from "../Body/Body";
import RegistrationForm from "../registration/Registration";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="registration" element={<RegistrationForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
