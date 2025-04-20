import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Calculator from  './Components/Calculator';
import Map from './Components/Map';
import App from './Components/App';
import ToDoList from './Components/ToDoList';
import MindGame from './Components/MindGame';
import Nopage from "./Components/Nopage";

const Appp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="About" element={<About />} />
          <Route path="Calculator" element={<Calculator />} />
          <Route path="Map" element={<Map />} />
          <Route path="App" element={<App />} />
          <Route path="ToDoList" element={<ToDoList />} />
          <Route path="MindGame" element={<MindGame />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Appp;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Appp />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
