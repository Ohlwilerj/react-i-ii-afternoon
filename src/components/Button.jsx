import React, { Component } from 'react'
import './Button.css'


export default class Button extends Component {

    render() {
        return (
            <div className='All'>
               <button onClick={this.props.previousButtonFn} className="Previous"> Previous</button> 
               <div className='sub buttons'>
                    <button className="edit">Edit</button>
                    <button className="delete">Delete</button>
                    <button className="new">New</button>
                </div>
               <button onClick={this.props.nextButtonFn} className="Next">Next</button>
            </div>
        )
    }
}
