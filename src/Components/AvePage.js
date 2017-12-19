import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import AveForm from './AveForm'
import * as aveActions from '../actions/aveActions'
import PropTypes from 'prop-types'


class AvePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {

      ave: this.props.ave,
      saving: false,
      isEditing: false,
      errors: null

    }


    this.onDeleteRedirect = this.onDeleteRedirect.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateAveState = this.updateAveState.bind(this);
    this.saveAve = this.saveAve.bind(this);
    this.deleteAve = this.deleteAve.bind(this);
    this.shouldUpdateErrors = this.shouldUpdateErrors.bind(this);

  }

  shouldUpdateErrors(errors){


    this.setState({errors: errors});
  }

  onDeleteRedirect() {
    this.props.history.push('/aves');
  }

  componentWillReceiveProps(nextProps) {

    if(typeof this.props.ave != 'undefined'){
      if (this.props.ave.CDAVE != nextProps.ave.CDAVE){
        this.setState({ave: nextProps.ave})
      }
    }else{
      if(typeof nextProps.ave != 'undefined'){
        this.setState({ave: nextProps.ave})
      }
    }

    this.setState({saving: false, isEditing: false})
  }

  toggleEdit(){

    this.setState({isEditing: ! this.state.isEditing})
  }

  updateAveState(event) {
    const field = event.target.name;
    const ave = this.state.ave;

    ave[field] = event.target.value;

    return this.setState({ave: ave});
  }


  deleteAve(event){

    this.props.actions.deleteAve(this.state.ave,this.onDeleteRedirect);

  }



  saveAve(event) {
    event.preventDefault();
    this.props.actions.updateAve(this.state.ave,this.shouldUpdateErrors);
  }

  makeLugares(lugares){
    return lugares.map(lugar => {
      return <li>{lugar}</li>
    })
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




    if(this.state.isEditing) {

      let error = this.displayError();

      return (
        <div>
          <h1>Editar ave</h1>
          {error}
          <AveForm
            ave={this.state.ave}
            onSave={this.saveAve}
            onChange={this.updateAveState}
            saving={this.state.saving}
            isEditing={this.state.isEditing}
          ></AveForm>

        </div>
      )

    }

    if(typeof this.state.ave == 'undefined'){
      return (
        <div>
          <h3>Cargando...</h3>
        </div>
      )
    }


    var listaLugares;

    if(typeof this.state.ave.paises != 'undefined' ){
      listaLugares = this.makeLugares(this.state.ave.paises.split(','));
    }else{
      listaLugares = [];
    }




    return (


      <div className="row">
        <div className="jumbotron">
          <h3>Nombre comun: {this.state.ave.DSNOMBRE_COMUN}</h3>
          <h3>Nombre cientifico: {this.state.ave.DSNOMBRE_CIENTIFICO}</h3>
          <span>Lugares</span>

          {listaLugares}

          <div style={{marginTop: '15px'}}>
            <button className="btn btn-primary" style={{marginRight: '5px'}} onClick={this.toggleEdit}  >Editar</button>
            <button className="btn btn-danger" onClick={this.deleteAve} >Eliminar</button>
          </div>


        </div>
      </div>
    )

  }

}


AvePage.propTypes = {
  ave: PropTypes.object.isRequired
}


function getAveById(aves, id) {
  let ave = aves.find(ave => ave.CDAVE == id)
  return Object.assign({}, ave)
}

function mapStateToProps(state, ownProps) {

  var ave;
  const aveId = ownProps.match.params.cdave;

  if(aveId && state.aves.length > 0){
    ave = getAveById(state.aves,aveId);
  }

  return {ave: ave}

}

function mapDispatchToProps(dispatch) {

  return {
    actions: bindActionCreators(aveActions, dispatch)
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(AvePage)
