import React from 'react';
import './App.css';
import axios from "axios";

import CardList from "./components/CardList";


class App extends React.Component {
  state = {
    user: [],
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/jnmendza`)
      .then(response =>{
        console.log(response)
        console.log(response.data.followers_url)
        this.setState({
          user: response.data
        });
        console.log(this.state);
      })
      .catch(err =>{
        console.log(`error`)
      })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <p>GitHub UserCards</p>
        <CardList />
        </header>
      </div>
    );
  };
}

export default App;
