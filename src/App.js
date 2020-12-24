import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import LandingPage from './LandingPage'
import Registration from './Registration'
import SignIn from './SignIn'
import CreateConvo from './CreateConvo'
import ConvoEventList from './ConvoEventList'
import Nav from './Nav'
import Error from './Error'




function App() {
    return (
        <div className="App">
            <BrowserRouter>
                {/* un-routed component */}
                <Nav />
                <Switch>
                    {/* statis routes */}
                    <Route exact path='/' component={LandingPage} />
                    <Route exact path='/signin' component={SignIn} />
                    <Route path='/registration' component={Registration} />
                    <Route path='/homepage' component={HomePage} />
                    <Route path="/convo-event-list/:meta" component={ConvoEventList} />
                    <Route path='/create-convo' component={CreateConvo} />
                    
                    {/* error route */}
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>


        </div>
    )
}

export default App