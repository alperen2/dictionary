import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import PageHeader from 'antd/lib/page-header';
import Navbar from "./components/Navbar"
import Dictionary from "./components/Dictionary"
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";



function App() {
  return (
    <Router>
      <PageHeader title="Dictionary" subTitle="Learning dictionary" footer={<Navbar />} />
      <Route path="dictionary" component={Dictionary} />
    </Router>
  )
}

export default App;
