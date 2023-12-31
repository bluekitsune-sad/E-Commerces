import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./components/Routes/Route";
import RegistrationForm from "./components/registration/Registration";

function App() {
  return (
    <div>
      {/* <div className="container1" id="loader">
        <svg
          className="loader"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 340 340"
        >
          <circle cx={170} cy={170} r={160} stroke="#39f" />
          <circle cx={170} cy={170} r={135} stroke="#666" />
          <circle cx={170} cy={170} r={110} stroke="#39f" />
          <circle cx={170} cy={170} r={85} stroke="#666" />
        </svg>
      </div> */}
      {/* <Header />
      <Body />
      <Footer /> */}
      {/* <RegistrationForm /> */}
      <div>
        <Routes />
      </div>
    </div>
  );
}

export default App;
