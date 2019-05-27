import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap'

class SearchBar extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <FormGroup controlId="searchTerm">
          <InputGroup>
            <FormControl type="text" placeholder="Search by meteorite name..." value={this.props.searchTerm} onChange={this.props.onChange} />
            <InputGroup.Append>
              <Button variant="outline-secondary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </FormGroup>
      </form>
    );
  }
}

// <InputGroup.Button>
//               <Button type="submit">
//                 Search
//               </Button>
//             </InputGroup.Button>
//           </InputGroup>

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
}

export default SearchBar
