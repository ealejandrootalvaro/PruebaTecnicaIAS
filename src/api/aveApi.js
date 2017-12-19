

class AveApi {

  static getAllAves(){

    return (
      fetch('/api/aves').then(response => {
        return response.json()
      }).catch(error => {
        return error
      })
    )

  }

  static updateAve(ave) {

    var data = {
      method: 'PUT',
      headers: new Headers({
        'Content-Type' : 'application/json'
      }),
      body: JSON.stringify({ave: ave, "message" : { "text" : "Hola Mundo" }})
    }

    return (

      fetch('/api/aves/'+ave.CDAVE,data)

    )
  }

  static createAve(ave) {

    var data = {
      method: 'POST',
      headers: new Headers({
        'Content-Type':'application/json'
      }),
      body: JSON.stringify({ave: ave})
    }

    return (

      fetch('/api/aves',data)

    )
  }

  static deleteAve(ave){

    var data = {
      method: 'DELETE'
    }

    return (
      fetch('/api/aves/'+ave.CDAVE,data).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      })

    )
  }



}

export default AveApi
