import React from 'react'
import PropTypes from 'prop-types'

class StrikeList extends React.Component {
	render() {
		return (
			<div>
        Here is the list of strikes!
      </div>
		);
	}
}

StrikeList.propTypes = {
	meteoriteData: PropTypes.array.isRequired
}

export default StrikeList;