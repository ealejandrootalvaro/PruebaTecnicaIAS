import React, { Component } from 'react'
import TextInput from './common/TextInput'
import CheckBox from './common/CheckBox'

import PropTypes from 'prop-types'

class AveForm extends Component {


  makeCheckBoxes(){

    if(typeof this.props.paises == 'undefined'){
      return;
    }

    return this.props.paises.map(pais => {
      return <CheckBox item={pais} handleChange={this.props.onPaisChange} key={pais.CDPAIS} />
    })
  }

  render(){

    const boxes = this.makeCheckBoxes();

    return (

      <div className="row">
        <div className="jumbotron">

      <form>

        { (!this.props.isEditing) && <TextInput
          name="CDAVE"
          label="Codigo Ave"
          value={this.props.ave.CDAVE}
          onChange={this.props.onChange} /> }

        <TextInput
          name="DSNOMBRE_COMUN"
          label="Nombre Comun"
          value={this.props.ave.DSNOMBRE_COMUN}
          onChange={this.props.onChange} />

        <TextInput
          name="DSNOMBRE_CIENTIFICO"
          label="Nombre Cientifico"
          value={this.props.ave.DSNOMBRE_CIENTIFICO}
          onChange={this.props.onChange} />


        {boxes}

        <input
          type="submit"
          disabled={this.props.saving}
          className="btn btn-success"
          onClick={this.props.onSave}
           />
      </form>

      </div>
      </div>
    )

  }

}

AveForm.propTypes = {
  ave: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  paises: PropTypes.array.isRequired,
  onPaisChange: PropTypes.func.isRequired
}

export default AveForm;
