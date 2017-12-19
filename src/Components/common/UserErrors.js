import React from 'react'
import PropTypes from 'prop-types'


class UserErrors extends React.Component {

  makeListErrors(){
    if(typeof this.props.errors == 'undefined'){
      return;
    }

    return this.props.errors.map(error => {
      return <p key={{error}} style={{textColor: 'red'}}><strong>{error.toString()}</strong></p>
    })
  }

  render(){

    const listErrors = this.makeListErrors();

    return (
      {listErrors}
    )

  }

}

UserErrors.propTypes = {
  errors : PropTypes.array.isRequired
}

export default UserErrors;
