import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

  state = {
    query: 'drink',
    locais: []
  }

  componentDidMount() {
    this.getLocais()
  }

  //Carrega o mapa
  loadMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyA6QsaRcYcvFayEmbuY2_X3iMREEWwiGZ4&callback=initMap")
    window.initMap = this.initMap
  }

  getLocais = () => {
    const foursquare = "https://api.foursquare.com/v2/venues/explore?"
    const parametros = {
      client_id: "NQBSOREJ4CNOIV4THG1QNP3HWUA4PW2YRUDWEICCE13Z3MER",
      client_secret: "N1B1VJED2BUVZENKCJR3UFGH5PFVXWHLDRPIK3YYBARCKOC1",
      query: this.state.query,
      near: "Ribeirao Preto",
      v: "20181202"
    }
    axios.get(foursquare + new URLSearchParams(parametros))
      .then(response => {
        this.setState({
          locais: response.data.response.groups[0].items
        }, this.loadMap())
      })
      .catch(error => {
        console.log("ERRO:" + error)
      })
  }

  initMap = () => {

    // Cria o mapa
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -21.170334, lng: -47.810142},
      zoom: 12
    })

    // Cria a infowindow
    var infowindow = new window.google.maps.InfoWindow()

    //Cria os Markers
    this.state.locais.map(local => {

      var contentString = local.venue.name

      var marker = new window.google.maps.Marker({
        position: {lat: local.venue.location.lat, lng: local.venue.location.lng},
        map: map,
        title: local.venue.name
      })

      marker.addListener('click', function() {

        //Conteudo da infowindow
        infowindow.setContent(contentString)

        //Abre a infowindow
        infowindow.open(map, marker)
      })

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

//Cria um elemento script
function loadScript(url) {
  var index  = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default App;
