import React from 'react'
import {Router} from 'react-router-dom'
import {history} from './helpers/history'
import ReactNotification from "react-notifications-component"
import 'react-notifications-component/dist/theme.css'
import './App.css'

import Routes from "./Routes"

const App = () => {
    return <div className="App">
        <ReactNotification/>
        <Router history={history}>
            <Routes/>
        </Router>
    </div>
}

export default App
