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
import Row from 'antd/lib/row';
import { Col } from 'antd/lib/grid';



function App() {
  return (
    <Router>
      <Row justify="center">
        <Col xl={12} md={16} xs={22}>
          <PageHeader title="Scholar" subTitle="Learning dictionary" footer={<Navbar />} />
          <Route path="/" exact component={Dictionary} />
        </Col>
      </Row>
    </Router>
  )
}

export default App;
