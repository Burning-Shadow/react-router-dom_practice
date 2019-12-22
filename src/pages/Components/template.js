/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-21 14:36:45
 * @LastEditors  : fatewang
 * @LastEditTime : 2019-12-22 10:52:44
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import React from "react";
import MainMenu from "./Menus/mainmenu"
import "./Menus/menus.css"

const Template = props => (
  <div className="page">
    <MainMenu></MainMenu>
    {props.children}
  </div>
);

export default Template
