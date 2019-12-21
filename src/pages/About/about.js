/*
 * @Author: your name
 * @Date: 2019-12-20 23:21:34
 * @LastEditTime : 2019-12-21 11:37:19
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-router-dom_practice\src\pages\About\about.js
 */
import React from "react";
import { Route } from "react-router-dom";
import { Template } from "../../template";
import { AboutMenu } from "../../menus";

import Company from "./Children/company.jsx";
import History from "./Children/history.jsx";
import Services from "./Children/services.jsx";
import Location from "./Children/location.jsx";

export const About = () => (
  <Template>
    <section className="about">
      <AboutMenu></AboutMenu>
      <Route path="/about" exact component={Company} />
      <Route path="/about/history" component={History} />
      <Route path="/about/services" component={Services} />
      <Route path="/about/location" component={Location} />
    </section>
  </Template>
);
