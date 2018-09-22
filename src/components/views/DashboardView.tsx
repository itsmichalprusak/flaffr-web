import * as React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'
import Navigation from "../Navigation";
import Toolbar from "../Toolbar";
import HomePage from "../pages/HomePage";
import TestPage from "../pages/TestPage";

/**
 * The main app container.
 */
export default class DashboardView extends React.Component {
    render() {
        return (
            <Router>
                <div className={'dashboard'}>
                    <Navigation/>
                    <Toolbar/>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/test'>Test</Link></li>
                    </ul>
                    <div className={'router'}>
                        {/* Route declarations go below this line */}
                        <Route path='/' exact={true} component={HomePage}/>
                        <Route path='/test' component={TestPage}/>
                    </div>
                </div>
            </Router>
        )
    }
}