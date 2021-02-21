import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import  PageHeader  from 'antd/lib/page-header';
import Navbar from "./components/Navbar"
import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <PageHeader title="Dictionary" subTitle="Learning dictionary" footer={<Navbar />} />
    </Router>
  )
}

export default App;
