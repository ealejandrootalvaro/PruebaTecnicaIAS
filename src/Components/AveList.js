import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import { Link } from 'react-router-dom';

class AveList extends Component{
  render(){

    const columns = [{
      Header: 'Codigo',
      accessor: 'CDAVE',
      filterable: true,
      Cell: props => <Link to={"/aves/"+props.value}>{props.value}</Link>
    }, {
      Header: 'Nombre comun',
      accessor: 'DSNOMBRE_COMUN',
      filterable: true
    },
    {
      Header: 'Nombre cientifico',
      accessor: 'DSNOMBRE_CIENTIFICO',
      filterable: true
    },
    {
      Header: 'Paises',
      accessor: 'paises',
      filterable: true
    }
    ]


    if(typeof this.props.aves == 'undefined'){
      return (
        <h1>No hay datos</h1>
      )
    }

    return (
      <div>
        <h1>Aves</h1>

        <ReactTable
          data={this.props.aves}
          columns={columns}
          defaultPageSize={10}
          defaultFilterMethod={(filter, row) => String(row[filter.id]).toUpperCase().includes(filter.value.toUpperCase())}
        />

      </div>
    );

  }

  renderAves(aves){
    return aves.map((ave) => {
      return (
        <li className="list-group-item" key={ave.CDAVE}>
          <Link to={"/aves/"+ave.CDAVE}>
            <h3 className="list-group-item-heading">Nombre comun: {ave.DSNOMBRE_COMUN} -- Nombre cientifico: {ave.DSNOMBRE_CIENTIFICO}</h3>
          </Link>
        </li>
      )
    })
  }

}

export default AveList;
