import React from 'react'
import PropTypes from 'prop-types'

class CheckBox extends React.Component {

  render() {
    return (
      <div className="field">
        <div>
          <label>  <input style={{marginRight: "10px"}} type="checkbox" name={this.props.item.pais} value={this.props.item.CDPAIS} checked={this.props.item.checked} onChange={this.props.handleChange} />{this.props.item.pais}--{this.props.item.zona}</label>
        </div>
        </div>
    )
  }

}


CheckBox.propTypes = {
  item: PropTypes.object.isRequired ,
  handleChange: PropTypes.func.isRequired
}

export default CheckBox;
