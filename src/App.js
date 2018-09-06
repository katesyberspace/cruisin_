import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import MainDisplay from './MainDisplay'
import axios from 'axios'


class App extends Component {
  constructor(){
    super()
    this.state = {
      countryName: '',
      countryUrl: '',
      data: null
    }
  }

  handleDataFromHeader = (data) => {
    // once the data suggestion/query comes from the child component, call the api to get the and store in state
    const url = data.url
    axios.get(url)
    .then(res => {
      this.setState({
        data: res.data
      })
    }).then(()=>{
      this.setState({
        countryName: data.name,
        countryUrl: data.url,
      })
    })
    .catch(function(err){
      console.log(err)
    })
  }


  render() {
    return (
      <div className="App">
        {/* passing header a function as a prop with binds App */}
        <Header handlerFromParent={this.handleDataFromHeader}/>
        <MainDisplay data={this.state.data}/>
      </div>
    );
  }
}

export default App;
