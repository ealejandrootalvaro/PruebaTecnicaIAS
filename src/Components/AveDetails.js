import React, { Component } from 'react';

class AveDetails extends Component {

  render(){

    const {ave} = this.props.activeAve;

    if(!ave){
      return <div>Cargando..</div>;
    }

    return (
      <div>
        <h3>{ave.DSNOMBRE_COMUN}</h3>
        <h6>Nombre cientifico: {ave.DSNOMBRE_CIENTIFICO}</h6>
      </div>
    );

  }

}

export default AveDetails;
