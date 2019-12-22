/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-21 14:41:26
 * @LastEditors  : fatewang
 * @LastEditTime : 2019-12-21 14:53:02
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import React from 'react'
import {NavLink} from 'react-router-dom'
import "./menus.css"

const selectedStyle = {
  backgroundColor: "white",
  color: "slategray"
};

const AboutMenu = () => (
  <ul className="about-menu">
    <li>
      <NavLink to="/about" exact activeStyle={selectedStyle}>
        公司简介
      </NavLink>
    </li>
    <li>
      <NavLink to="/about/history" activeStyle={selectedStyle}>
        公司历史
      </NavLink>
    </li>
    <li>
      <NavLink to="/about/services" activeStyle={selectedStyle}>
        公司服务
      </NavLink>
    </li>
    <li>
      <NavLink to="/about/location" activeStyle={selectedStyle}>
        企业位置
      </NavLink>
    </li>
  </ul>
);

export default AboutMenu