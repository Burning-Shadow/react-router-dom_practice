/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-20 22:27:40
 * @LastEditors  : fatewang
 * @LastEditTime : 2019-12-21 14:37:11
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import React from "react";
import { MainMenu } from "./menus";

export const Template = props => (
  <div className="page">
    <MainMenu></MainMenu>
    {props.children}
  </div>
);
