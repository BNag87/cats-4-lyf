//----------→ REACT IMPORTS ----------→
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//----------→ CSS IMPORTS ----------→
import "./App.css";

//----------→ COMPONENT IMPORTS ----------→
import About from "./About";
import Product from "./components/Product";
import Home from "./basilsComponents/Home";
import Contacts from "./Contacts";
import Navbar from "./Navbar";
import Basket from "./basilsComponents/Basket";
import Footer from "./Footer";

//----------→ MAIN FUNCTION ----------→
const App = () => {
  // ↓ useState used to pass cat elements to basket
  const [basket, setBasket] = useState([]);

  return (
    <Router>
      <div className="App">
        {/* ANYTHING BEFORE "<Navbar/>" WILL BE PERMANENTLY SHOWN/USED */}

        <Navbar />

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
              <Product bket={basket} sbket={setBasket} />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/contact">
              <Contacts />

              {/* Basket takes 'props'. messsage displays a <h2> tag. total needs to be calculated, then passed in*/}
              <Basket basket={basket} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
