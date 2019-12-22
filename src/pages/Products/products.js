/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-21 11:41:37
 * @LastEditors  : fatewang
 * @LastEditTime : 2019-12-22 11:02:06
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */

import React from "react";
import { Link } from "react-router-dom";
import Template from "../Components/template";

const Products = () => (
  <Template>
    <section className="products">
      <Link to="/details/telphone">手机</Link>
      &nbsp;
      <Link to="/details/computer">电脑</Link>
    </section>
  </Template>
);

export default Products;
