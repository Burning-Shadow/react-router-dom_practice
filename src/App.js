/*
 * @Author: your name
 * @Date: 2019-12-20 21:21:21
 * @LastEditTime : 2019-12-20 22:26:46
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-router-dom_practice\src\App.js
 */
import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

// 引入展示组件
import { About, Contact, Home, Products, Events, NotFound404, Details } from './pages';

function App() {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/products' component={Products}/>
          <Route path='/events' component={Events}/>  
          <Redirect from='/history' to='about/history'></Redirect>
          <Route path='/details/:type' component={Details}></Route>     
          <Route component={NotFound404}/>     
        </Switch>     
      </div>
    </HashRouter>
  )
}

export default App