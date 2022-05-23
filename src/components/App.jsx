
import React from "react"
import Menu from '../components/menu/Menu'
import Routes from './Routes'
import Todo from './todo/Todo'
import About from './about/About'


export default (props) => {
    return (<div className="Container">
        <Menu />
        <Routes/>
    </div>)
}

