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
                    <div className={'router'}>
                        {/* Route declarations go below this line */}
                        <Route exact path={'/'} component={HomePage}/>
                    </div>
                </div>
            </Router>
        )
    }
}