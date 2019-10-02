import React from 'react';
import './App.css';
import axios from "axios";
import styled from 'styled-components';



import UserCard from "./components/UserCard";


const Grid = styled.div`
  
`;

class App extends React.Component {
  state = {
    user: [],
    followers: []
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

    axios
      .get('https://api.github.com/users/jnmendza/followers')  
      .then(response =>{
        this.setState({
          followers: response.data
        });
        console.log(this.state, "followers info");
      })
      .catch(err =>{
        console.log('error')
      })
  }

  render(){
    return (
      <div className="App">
        <div className="App-header">
        <p>GitHub UserCards</p>
       <Grid>
        <UserCard key={this.state.user} user={this.state.user} />

        {this.state.followers.map(props =>(
        <UserCard key={props.followers} user={props} />

          ))}
          </Grid>  
        </div>
      </div>
    );
  };
}

export default App;
