import React from 'react';
import axios from 'axios'

import StrikeList from './StrikeList.js'
import SearchBar from './SearchBar.js'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      meteoriteData: [],
      isLoaded: false,
      searchTerm: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    console.log(this.state.searchTerm)
  }

  render() {
    return (
      <div className="App">
        <h1 id="title">Meteorite Data Explorer</h1>
        <SearchBar onSubmit={(e) => this.handleSubmit(e)} onChange={(e) => this.handleChange(e)} searchTerm={this.state.searchTerm} />
        { this.state.isLoaded ? <StrikeList meteoriteData={this.state.meteoriteData} /> : 'Loading Data...' }    
      </div>
    );
  }
}

export default App;
