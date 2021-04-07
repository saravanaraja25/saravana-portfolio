import React from 'react'
import {Route, Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Skills from './Skills';
import Work from './Work';

function Body() {
    return (
        <>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About} exact/>
                <Route path="/works" component={Work} exact/>
                <Route path="/skills" component={Skills} exact />
                <Route path="/contact" component={Contact} exact/>
            </Switch>
        </>
    )
}

export default Body
