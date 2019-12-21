/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2019-12-21 14:53:37
 * @LastEditors  : fatewang
 * @LastEditTime : 2019-12-21 16:30:50
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */
import React from 'react'

const Details = props => {
  console.log(props)
  console.log(props.match.params);
  return <p>这是 {props.match.params.type}详情内容</p>;
};

export default Details;