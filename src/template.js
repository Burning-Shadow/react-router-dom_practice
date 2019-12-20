/*
 * @Author: your name
 * @Date: 2019-12-20 22:27:40
 * @LastEditTime: 2019-12-20 22:27:46
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react-router-dom_practice\src\template.js
 */
import React from 'react'
import { MainMenu } from "./menus";

export const Template = (props) => (
  <div className = 'page'>
    <MainMenu></MainMenu>
    {props.children}
  </div>
)