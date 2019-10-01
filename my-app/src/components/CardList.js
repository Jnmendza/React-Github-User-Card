import React, { Component } from 'react';
import axios from 'axios';

// * IMPORT COMPONENTS HERE
import UserCard from './UserCard';

export default class Users extends Component {

    state = {
        user: []
    }

    componentDidMount() {

        // * Getting the data for the card
        axios.get(`https://api.github.com/users/jnmendza`)
        .then(res => this.setState({user: res.data}))

        console.log(`CardList axios`);
    }

    componentDidUpdate() {
        console.log(this.state.user, 'cDU')
    }

    render() {

        return (
            <div>
                <h1>Header Above UserCard</h1>

                <UserCard key={this.state.user} user={this.state.user}/>
                
            </div>
        )
    }
}