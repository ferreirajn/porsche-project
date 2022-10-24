import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Models from './routes/Models';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Discover from './routes/discover';
import Model from './routes/model';
import NotFound from './routes/not-found';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>  
    <Header/>
      <Routes>
        <Route path='/' element={  <App />} />
        <Route path='/models' element={  <Models />} />
        <Route path='/models/:modelId' element={  <Model />} />
        <Route path='/discover' element={  <Discover />} />
        <Route path='*' element={< NotFound/>} />
      </Routes>
      <Footer />
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
