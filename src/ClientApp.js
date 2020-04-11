import React from "react";
import Routes from "./Routes";
import {Router} from "react-router-dom";
import { history } from './helpers/history';
import ReactDOM from 'react-dom'

ReactDOM.render(
    <Router history={history}>
        <Routes/>
    </Router>,
    document.getElementById('app')
)