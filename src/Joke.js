import React, { Component } from 'react';
import './Joke.css';

class Joke extends Component {
    render(){
        return(
            <h1 className="joke">{this.props.theJoke}</h1>
        )
    }
}

export default Joke;