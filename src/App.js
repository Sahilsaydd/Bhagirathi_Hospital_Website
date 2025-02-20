import logo from './logo.svg';
import React from 'react';
import Home from './Component/Home_page/Home.jsx';
import {  Routes, Route  } from 'react-router-dom';
import About from './Component/AboutUs/About.jsx';
import Services from './Component/Services/Services.jsx';
import Gallary from './Component/Gallary/Gallary.jsx';
import Blog from './Component/Blog/Blog.jsx';
import Contact_us from './Component/ContactUs/Contact_us.jsx';
import Navbar from './Component/Navbar/Navbar.jsx';
import Footer from './Component/Footer/Footer.jsx';
import Form from './Component/Appoinment_form/Form.jsx';
function App() {
  return (
    <>
<>


<Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/form' element={<Form/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/gallary' element={<Gallary/>}/>
    <Route path='/blogs' element={<Blog/>}/>
    <Route path='/contact' element={<Contact_us/>}/>
  </Routes>

  <Footer/>


  </>
    </>
  );
}

export default App;
