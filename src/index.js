import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './style.css';
import './All_css_file/About_us.css'
import './All_css_file/Slider.css'
import './All_css_file/Our_ScrollSlider.css'
import './All_css_file/Services.css'
import './All_css_file/Blog.css'
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> {/* Wrap everything inside BrowserRouter */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
