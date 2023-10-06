
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import FAQ from "./components/FAQ";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Events from "./components/Events";
// import AboutUs from "./components/AboutUs";
import Donations from './components/Donations'
import DonateFundsForm from './components/DonateFundsForm'
import ItemForm from './components/ItemForm'
import ContactUs from "./components/ContactUs";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";


function App() {
  const [count, setCount] = useState(0);
  

  return (
    
    <>
    <div>
      <Router>
        <Navbar/>
      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/donate" element={<Donations />} />
          <Route exact path="/donatefundsform" element={<DonateFundsForm />} />
          <Route exact path="/itemsform" element={<ItemForm />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/faqs" element={<FAQ />} />
          <Route exact path="/signIn" element={<SignIn />} />
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
        {/* <AboutUs/> */}
        
     
      </Router>
          </div>
    </>
  );
}

export default App;