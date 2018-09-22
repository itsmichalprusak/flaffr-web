import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Dashboard from "./components/Dashboard";

/*
 * Get the React DOM and init our app.
 */
ReactDOM.render(
    <Dashboard/>,
    document.getElementById('root') // The element we are mounting the virtual DOM on
)