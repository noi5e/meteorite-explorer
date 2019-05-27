import React from 'react';
import axios from 'axios'

import StrikeList from './StrikeList.js'
import SearchBar from './SearchBar.js'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      defaultMeteoriteData: [],
      filteredData: [],
      isLoaded: false,
      searchTerm: '',
      searchTermMatchesNothing: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://data.nasa.gov/resource/gh4g-9sfh.json',
      data: {
        "$$app_token": "hwz12X1ARsE8InvJVrwRpOAY0"
      }
    })
      .then((response) => {
        console.log(response.data)

        this.setState({
          defaultMeteoriteData: response.data,
          filteredData: response.data,
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

    if (this.state.searchTerm.length > 0) {

      const newFilteredData = this.state.defaultMeteoriteData.slice(0).filter((strike) => {
        // console.log(strike.name.toLowerCase())
        return new RegExp(this.state.searchTerm.toLowerCase()).test(strike.name.toLowerCase());
      })

      if (newFilteredData.length > 0) {

        this.setState({
          filteredData: newFilteredData,
          searchTermMatchesNothing: false
        })


      } else {

        this.setState({
          filteredData: [],
          searchTermMatchesNothing: true
        })

      }

      
    } else {

      this.setState({
        filteredData: this.state.defaultMeteoriteData.slice(0)
      })

    }
  }

  render() {
    return (
      <div className="App">
        <h1 id="title">Meteorite Data Explorer</h1>
        <SearchBar onSubmit={(e) => this.handleSubmit(e)} onChange={(e) => this.handleChange(e)} searchTerm={this.state.searchTerm} />
        { this.state.isLoaded ? <StrikeList meteoriteData={this.state.filteredData} /> : <div id='table-placeholder'>Loading Data...</div> }
        { this.state.searchTermMatchesNothing ? <div id='table-placeholder'>No matches found.</div> : '' }
      </div>
    );
  }
}

export default App;
