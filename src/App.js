import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

  state = {
    locais: []
  }

  componentDidMount() {
    this.getLocais()
    this.loadMap()
  }

  // Inicia o mapa
  loadMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyA6QsaRcYcvFayEmbuY2_X3iMREEWwiGZ4&callback=initMap")
    window.initMap = this.initMap
  }

  getLocais = () => {
    const foursquare = "https://api.foursquare.com/v2/venues/explore?"
    const parametros = {
      client_id: "NQBSOREJ4CNOIV4THG1QNP3HWUA4PW2YRUDWEICCE13Z3MER",
      client_secret: "N1B1VJED2BUVZENKCJR3UFGH5PFVXWHLDRPIK3YYBARCKOC1",
      query: "drink",
      near: "Ribeirao Preto",
      v: "20181202"
    }
    axios.get(foursquare + new URLSearchParams(parametros))
      .then(response => {
        this.setState({
          locais: response.data.response.groups[0].items
        })
      })
      .catch(error => {
        console.log("ERRO:" + error)
      })
  }

  initMap = () => {

    // Cria o mapa
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -21.211045, lng: -47.804921},
      zoom: 16
    })
  }

  render() {
    return (
      <main>
        <div id="map"></div>
      </main>
    );
  }
}

function loadScript(url) {
  var index  = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default App;
