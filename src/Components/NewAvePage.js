import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as aveActions from '../actions/aveActions'
import AveForm from './AveForm'
import PropTypes from 'prop-types'



class NewAvePage extends React.Component {

  constructor(props) {

    super(props)
    this.state = {

      ave: {
        DSNOMBRE_COMUN: "",
        DSNOMBRE_CIENTIFICO: "",
        CDAVE: "",
        paises: []
      },
      saving: false,
      errors: null

    };

    this.handleRedirect = this.handleRedirect.bind(this);
    this.shouldUpdateErrors = this.shouldUpdateErrors.bind(this);
    this.saveAve = this.saveAve.bind(this);
    this.updateAveState = this.updateAveState.bind(this);
    this.updateAvePaises = this.updateAvePaises.bind(this);

  }

  shouldUpdateErrors(errors){


    this.setState({errors: errors});
  }

  updateAvePaises(event){

    const ave = this.state.ave;
    const cdPais = event.target.value;

    const checkPais = this.props.checkBoxPaises.filter(pais => {
      return pais.CDPAIS == cdPais
    })[0];

    const checked = !checkPais.checked;
    checkPais['checked'] = !checkPais.checked;

    if(checked){
      ave.paises.push(checkPais);
    }else {

      ave.paises.splice(ave.paises.findIndex(i => i.CDPAIS == checkPais.CDPAIS));

    }

    this.setState({ave: ave})

  }

  updateAveState(event){
    const field = event.target.name;
    const ave = this.state.ave;

    ave[field] = event.target.value;
    return this.setState({ave: ave});

  }

  saveAve(event){
    event.preventDefault();
    this.props.actions.createAve(this.state.ave,this.handleRedirect,this.shouldUpdateErrors);
  }

  handleRedirect(ave) {
    this.props.history.push('/aves/'+ave.CDAVE)
  }

  displayError(){
    if(this.state.errors === null){
      return;
    }

    return (
      <div className="alert alert-danger">
        <strong>Error!</strong> {this.state.errors}.
      </div>
    )
  }

  render(){

    let error = this.displayError();

    return (
      <div>
        <h1>Nueva Ave</h1>
        {error}
        <AveForm
          ave={this.state.ave}
          onSave={this.saveAve}
          onChange={this.updateAveState}
          paises={this.props.checkBoxPaises}
          onPaisChange={this.updateAvePaises}
          isEditing={false}
          />
      </div>
    )
  }

}



NewAvePage.propTypes = {
  actions: PropTypes.object.isRequired
}

function paisesToCheckBoxes(paises){
  return paises.map( pais => {
    pais['checked'] = false;
    return pais;
  })
}

function mapStateToProps(state, ownProps){

  let checkBoxPaises = [];

  if(state.zonas.length > 0 ){
    checkBoxPaises = paisesToCheckBoxes(Object.assign([], state.zonas))
  }

  return {
    checkBoxPaises : checkBoxPaises
  }


}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(aveActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAvePage)
