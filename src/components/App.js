import React from 'react';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      meteoriteData: []
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
        this.setState({
          meteoriteData: response.data
        })
      })
  }

  render() {
    return (
      <div className="App">
        Hello World!
      </div>
    );
  }
}

export default App;
