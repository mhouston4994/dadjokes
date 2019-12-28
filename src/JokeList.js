import React, { Component } from 'react';
import axios from 'axios';
import './JokeList.css';
import Joke from './Joke';

class JokeList extends Component {
    constructor(props){
        super(props);
        this.state = {
            jokes: [1,2,3],
        }

    }
    render(){
        //Create GET Request
        const pullRequest = async run => {
            let data = await axios.get('https://icanhazdadjoke.com/', {
                headers: {
                    Accept: 'application/json'
                }
            })
                .then(response => {
                    let jokes = response.data.joke;
                        <Joke theJoke={jokes} />
                })
        }
        
        const allJokes = this.state.jokes.map(pullRequest);
        return(
            <div className="JokeList">
                {allJokes}
            </div>
        )
    }
}

export default JokeList;