import React from 'react';
import axios from 'axios';
import './App.css';
import CardList from "./components/CardList"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: [],
    }
  }
  
  componentDidMount() {
    axios
      .get('https://api.github.com/users/jnmendza')
      .then(res => {
        this.setState(res);
        // console.log(this.state);
      })
      .catch(err => console.log(err))
  } 
  
  render(){
    return (
      <div className="App">
        <h1 className="header">Header for App</h1>
        
        <CardList />
      </div>
    )
  }
}

export default App;
