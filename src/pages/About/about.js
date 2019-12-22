/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-20 23:21:34
 * @LastEditors  : fatewang
 * @LastEditTime : 2019-12-21 17:00:26
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import React from "react";
import { Route } from "react-router-dom";
// import { Template } from "../../template";
import  Template  from "../Components/template";
// import { AboutMenu } from "../../menus";
import AboutMenu from '../Components/AboutMenu/aboutmenu'

import Company from "./Children/company.jsx";
import History from "./Children/history.jsx";
import Services from "./Children/services.jsx";
import Location from "./Children/location.jsx";

const About = () => (
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

export default About;
