import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import AveList from './AveList'


class AvesPage extends React.Component {
  render() {
    return (
      <div>
      <AveList aves={this.props.aves}></AveList>
      </div>
    )

  }
}

function mapStateToProps(state, ownProps){

  return {
    aves: state.aves
  }

}

AvesPage.propTypes = {
  aves: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(AvesPage)
