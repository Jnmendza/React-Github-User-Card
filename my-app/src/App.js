import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from "./components/UserCard"

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
        console.log(res)
        console.log(res.data.name)
        this.setState({
          user: res.data
        });
        console.log(this.state);
      })
      .catch(err => console.log(err))
  }
  
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.user !== prevState.user) {
  //     if (this.state)
  //   }
  // }
  
  render(){
    return (
      <div className="App">
        <h1 className="header">Header</h1>
        <p>GitHub Cards</p>
        <UserCard />
      </div>
    )
  }
}

export default App;
