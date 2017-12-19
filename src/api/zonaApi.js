class zonaApi {

  static getAllZonas(){

    return (
      fetch('/api/zonas').then(response => {
        return response.json()
      }).catch(error => {
        return error
      })
    )

  }

}

export default zonaApi;
