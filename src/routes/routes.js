import React from 'react'
import {Switch, Route} from 'react-router-dom'
import App from '../App'
import Cal1 from '../components/tabs/Cal1'
import Cal2 from '../components/tabs/Cal2'
import Cal3 from '../components/tabs/Cal3'
import Cal4 from '../components/tabs/Cal4'
import Cal5 from '../components/tabs/Cal5'



export default (
    <Switch>
        <Route exact path='/' component={App} />
        <Route path='/1' component={Cal1} />
        <Route path='/2' component={Cal2} />
        <Route path='/3' component={Cal3} />
        <Route path='/4' component={Cal4} />
        <Route path='/5' component={Cal5} />
        
        
    </Switch>
    
    )