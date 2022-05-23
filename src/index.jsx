import ReactDom from 'react-dom'
import React from 'react'
import App from'./components/App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


ReactDom.render(
    <App></App>, 
    document.getElementById('root')
    )