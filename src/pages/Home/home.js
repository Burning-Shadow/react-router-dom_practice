/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-21 11:32:21
 * @LastEditors  : fatewang
 * @LastEditTime : 2019-12-21 15:36:57
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import React from "react";
import { Link } from "react-router-dom";
import "../../static/css/pages.css"

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
