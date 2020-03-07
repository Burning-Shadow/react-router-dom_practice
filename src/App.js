/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-20 21:21:21
 * @LastEditors  : fatewang
 * @LastEditTime : 2019-12-22 10:57:44
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import About from './pages/About/about'
import Contact from './pages/Contact/contact'
import Home from './pages/Home/home'
import Products from './pages/Products/products'
import Events from './pages/Events/events'
import Details from './pages/Details/details'
import NotFound404 from './pages/NotFound/notfound'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/events" component={Events} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          <Redirect from="/history" to="about/history" />
          <Route path="/details/:type" component={Details} />
          <Route component={NotFound404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
