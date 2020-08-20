import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react';
import Nav from '../components/template/nav';
import Footer from '../components/template/footer';
import {HashRouter} from 'react-router-dom';
import Routes from './Routes';

export default props =>
<HashRouter>
<div className="app">
    <Nav />
    <Routes />
    <Footer />
</div>
</HashRouter>
