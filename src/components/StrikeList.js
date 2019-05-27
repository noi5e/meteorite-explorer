import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'

class StrikeList extends React.Component {
	render() {
    let strikes = []

    strikes = this.props.meteoriteData.map((strike, index) => {
      return (
        <tr key={strike.id}>
          <td>{strike.name}</td>
          <td>{strike.id}</td>
          <td>{strike.nametype}</td>
          <td>{strike.recclass}</td>
          <td>{strike.mass}</td>
          <td>{strike.fall}</td>
          <td>{strike.year}</td>
          <td>{strike.reclat}</td>
          <td>{strike.reclong}</td>
        </tr>
      );
    })

		return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Name Type</th>
            <th>Rec Class</th>
            <th>Mass (g)</th>
            <th>Fall</th>
            <th>Year</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {strikes}
        </tbody>
      </Table>
		);
	}
}

StrikeList.propTypes = {
	meteoriteData: PropTypes.array.isRequired
}

export default StrikeList;
