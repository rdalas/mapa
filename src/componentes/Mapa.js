import React, { Component } from 'react';

class Mapa extends Component {
  markers = [];
  //Adiciona os marcadores ao mapa
  addMarkers = locais => {
    if (window.google) {
      let infoWindow = new window.google.maps.InfoWindow();
      for (let i = 0; i < locais.length; i++) {
        let marker = new window.google.maps.Marker({
          position: {
            lat: locais[i].venue.location.lat,
            lng: locais[i].venue.location.lng
          },
          map: window.mapObject,
          title: locais[i].venue.name,
          animation: window.google.maps.Animation.DROP
        });
        marker.addListener("click", () => {
          let content = this.props.preparaConteudo(locais[i]);
          infoWindow.setContent(content);
          infoWindow.open(window.mapObject, marker);
          marker.setAnimation(window.google.maps.Animation.BOUNCE);
        });
        this.markers.push(marker);
      }
      window.infoWindow = infoWindow;
      window.markers = this.markers;
    }
  };

  //Limpa os markers antes de carregar novamente
  removeMarkers = () => {
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
  }


  render() {
    this.removeMarkers();
    this.addMarkers(this.props.locais);
    return (
      <div role="application" id="map"></div>
    );
  }
}

export default Mapa;
