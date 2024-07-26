import React from "react";
import { BrowserRouter as Router, Switch, Route,HashRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './App.css';
import NavBar from "./component/Navbar1";
import Prices from "./component/caratSaudiAu";
import  chart  from "./component/pages/chart";
import Carat from "./component/pages/carat"
import FormGoldCalculat from "./component/pages/GoldCalculator";
import NationLists from "./component/pages/NationLists";
import Converter from "./component/pages/converter";
import Footer from "./component/Footer";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavBar />
<div className="all">
        <Container >
          <Row>
            
            <Col  md='8' >
              <div className="Switch">
                <Switch>
                  <Route path="/goldprice24/prices" component={Prices} />
                  <Route path="/chart" component={chart}></Route>
                  <Route path="/FormGoldCalculat" component={FormGoldCalculat} />
                  <Route path="/Converter" component={Converter}></Route>
                </Switch>
              </div>
              
            </Col>
            <Col md='3' >
            
              <div className="NationLists">
                <NationLists />
              </div>
            </Col>
          </Row>
        </Container></div>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
