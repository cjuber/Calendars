import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div className='nav'>
                
               <Link to='/1' className='link'><h1>Calendar 1</h1></Link>
               <Link to='/2' className='link'><h1>Calendar 2</h1></Link>
               <Link to='/3' className='link'><h1>Calendar 3</h1></Link>
               <Link to='/4' className='link'><h1>Calendar 4</h1></Link>
               <Link to='/5' className='link'><h1>Calendar 5</h1></Link>
               
            </div>
        )
    }
}
