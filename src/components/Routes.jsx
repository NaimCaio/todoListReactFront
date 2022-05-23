import React from "react"
import { HashRouter, Route, Navigate, Routes } from "react-router-dom"
import Todo from './todo/Todo'
import About from './about/About'

export default props => {
    return(<HashRouter>
        <Routes>
            <Route path="/todos" element={<Todo />} />
            <Route path="/about" element={<About />} />
            <Route path='*' element={ <Navigate replace to="/todos" /> }/>
        </Routes>
    </HashRouter>)
    
}

