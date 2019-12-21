/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-21 14:36:45
 * @LastEditors  : fatewang
 * @LastEditTime : 2019-12-21 14:51:41
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import React from "react";
import MainMenu from "./MainMenu/mainmenu"
import "./menus.css"

export const Template = props => (
  <div className="page">
    <MainMenu></MainMenu>
    {props.children}
  </div>
);
