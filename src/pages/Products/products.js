/*
 * @Author: your name
 * @Date: 2019-12-21 11:41:37
 * @LastEditTime : 2019-12-21 11:42:34
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-router-dom_practice\src\pages\Products\products.js
 */
import React from "react";
import { Link } from "react-router-dom";
import { Template } from "../../template";

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
