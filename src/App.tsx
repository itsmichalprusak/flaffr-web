import * as React from 'react'
import * as ReactDOM from 'react-dom'
import DashboardView from "./components/DashboardView";

/*
 * Get the React DOM and init our app.
 */
ReactDOM.render(
    <DashboardView/>,
    document.getElementById('root') // The element we are mounting the virtual DOM on
)