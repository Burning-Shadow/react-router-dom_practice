/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-21 14:38:22
 * @LastEditors  : fatewang
 * @LastEditTime : 2019-12-22 10:50:06
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */
import React from 'react'
import { NavLink } from "react-router-dom";
import "./menus.css";

const selectedStyle = {
  backgroundColor: "white",
  color: "slategray"
};

const MainMenu = () => (
  <nav className="main-menu">
    <NavLink to="/">首页</NavLink>
    <NavLink to="/about" activeStyle={selectedStyle}>
      关于我们
    </NavLink>
    <NavLink to="/events" activeStyle={selectedStyle}>
      企业事件
    </NavLink>
    <NavLink to="/products" activeStyle={selectedStyle}>
      公司产品
    </NavLink>
    <NavLink to="/contact" activeStyle={selectedStyle}>
      联系我们
    </NavLink>
  </nav>
);

export default MainMenu;