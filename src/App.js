import "./App.css";
import Home from "./Home";
import BasketList from "./BasketList";
import About from "./About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Product from "./components/Product";
import Basket from './Basket';
  
function App() {
  return (
    <Router>
      <div className="App">
        
        {/* ANYTHING HERE WILL BE PERMANENTLY SHOWN */}
        <Navbar/>

        <div className = "content">
          <Switch>
            
            <Route exact path="/">
              <Home />
            </Route>
            
            <Route exact path = "/about">
              <About />
            </Route>

            <Route exact path = "/basketList">
              <BasketList/>
              
              {/* Basket takes 'props'. messsage displays a <h2> tag. total needs to be calculated, then passed in*/}
              <Basket message="Total" total="499.99"/>
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
);
}

export default App;

