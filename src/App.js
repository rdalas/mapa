import React, { Component } from 'react';
import './App.css';
import Conteudo from './componentes/Conteudo';
import ErrorBoundary from './ErrorBoundary'

class App extends Component {

  //Carrega o mapa
  loadMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyA6QsaRcYcvFayEmbuY2_X3iMREEWwiGZ4&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = () => {
    // Cria o mapa
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -21.170334, lng: -47.810142},
      zoom: 12
    });
    window.mapObject = map;
  }

  render() {
    this.loadMap();
    return (
      <div className='App'>
        <ErrorBoundary>
          <Conteudo/>
        </ErrorBoundary>
      </div>
    );
  }
}

//Cria um elemento script
function loadScript (url) {
  var index  = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default App;
