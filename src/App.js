import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.loadMap()
  }

  // Inicia o mapa
  loadMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyA6QsaRcYcvFayEmbuY2_X3iMREEWwiGZ4&callback=initMap")
    window.initMap = this.initMap
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
