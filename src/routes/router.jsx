import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Layout from '../components/layout/layout';
import Home from '../views/home/home'
export default function AppRouter() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/recipe">
                        <div>
                            esa es otra
                        </div>
                    </Route>
                </Switch>
            </Layout>
        </Router>
    )
}
