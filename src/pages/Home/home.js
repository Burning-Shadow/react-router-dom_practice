/*
 * @Author: your name
 * @Date: 2019-12-21 11:32:21
 * @LastEditTime: 2019-12-21 11:33:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react-router-dom_practice\src\pages\Home\home.js
 */
import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <section className="home">
    <h1>企业网站</h1>
    <nav>
      {/* 添加了四个导航组件Link */}
      <Link to="/about">关于我们</Link>
      <Link to="/events">企业事件</Link>
      <Link to="/products">公司产品</Link>
      <Link to="/contact">联系我们</Link>
    </nav>
  </section>
);

export default Home;
