import React from 'react';
import axios from 'axios'

import StrikeList from './StrikeList.js'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      meteoriteData: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://data.nasa.gov/resource/gh4g-9sfh.json',
      // responseType: 'stream',
      data: {
        "$limit": 5000,
        "$$app_token": "hwz12X1ARsE8InvJVrwRpOAY0"
      }
    })
      .then((response) => {
        console.log(response.data)

        this.setState({
          meteoriteData: response.data,
          isLoaded: true
        })
      })
  }

  render() {
    return (
      <div className="App">
        <h1 id="title">Meteorite Data Explorer</h1>
        { this.state.isLoaded ? <StrikeList meteoriteData={this.state.meteoriteData} /> : 'Loading Data...' }    
      </div>
    );
  }
}

export default App;
