import React from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './index.css';

import Menu from './coms/menu/menu'
import HomePage from './pages/home/index'
import SpiderPage from './pages/spider/index'
import WashPage from './pages/wash/index'
import AnalyzePage from './pages/analyze/index'
import ResultPage from './pages/result/index'
import MonitorPage from './pages/monitor/index'


const App = () => {
  return (
    <Router>
      <div className="app">
        <Menu />
        <div className="page">
          <Switch>
            <Route exact path="/home">
              <HomePage />
            </Route>
            <Route path="/spider">
              <SpiderPage />
            </Route>
            <Route path="/wash">
              <WashPage />
            </Route>
            <Route path="/analyze">
              <AnalyzePage />
            </Route>
            <Route path="/result">
              <ResultPage />
            </Route>
            <Route path="/monitor">
              <MonitorPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}


ReactDOM.render((
  <App />
), document.getElementById("root"))

