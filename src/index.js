import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import {Switch, Route, BrowserRouter } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video/index';
import CadastroCategoria from './pages/cadastro/categoria/index'


const Pagina404 = () => (<div>Error 404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>    
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />    
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);