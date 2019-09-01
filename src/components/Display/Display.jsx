import React, { Component } from 'react'
import './Display.css'
import Data from '../../components/Data'
import Button from '../Button'

export default class Display extends Component {

    constructor() {
        super()

        this.state = {
            data: [],
            index: 0
        }
    }

    nextButton = () => {
        if(Data.length - 2 >= this.state.index) {
            this.setState({
                index: this.state.index + 1
        })
        }
    }

    previousButton = () => {
        if(1 <= this.state.index) {
            this.setState({
                index: this.state.index - 1
        })
        }
    }

    
    render() {
        console.log(Data)
        return (
            <div>
            <div className="main">
                {<h3 className="index">{this.state.index + 1}/{Data.length}</h3>}
                {<h1>{Data[this.state.index].name.first} {Data[this.state.index].name.last}</h1>}
                {<h1>{Data[this.state.index].city},{Data[this.state.index].country}</h1>}
                {<h1>{Data[this.state.index].title}</h1>}
                {<h1>{Data[this.state.index].employer}</h1>}
                {<h1>Favorite Movies:</h1>}
                {Data[this.state.index].favoriteMovies.map((el, index) => <h3>{index +1}.{el}</h3>)}
            </div>
            <div>
            <Button nextButtonFn={this.nextButton} previousButtonFn= {this.previousButton} className="Button Box"/>
            
            </div>
            </div>

        )
    }
}
