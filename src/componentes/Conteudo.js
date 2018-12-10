import React, { Component } from 'react';
import Mapa from './Mapa';
import Lista from './Lista';
import axios from 'axios';

class Conteudo extends Component {
  state = {
    locais: [],
    queryLocais:[],
    query: ''
  };

  componentDidMount() {
    this.getLocais()
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
          locais: response.data.response.groups[0].items,
          queryLocais: response.data.response.groups[0].items,
        })
      })
      .catch(error => {
        console.log("ERRO:" + error)
      })
  }

  mostraConteudo = (local) => {
    for (let i = 0; i < window.markers.length; i++) {
      if (local.venue.name === window.markers[i].title) {
        let content = this.preparaConteudo(local);
        window.infoWindow.setContent(content);
        window.infoWindow.open(window.mapObject, window.markers[i]);
        window.markers[i].setAnimation(window.google.maps.Animation.BOUNCE);
      }
    }
  }

  preparaConteudo = local => {
    return `<div>
    <p className="title">
      Name: ${local.venue.name}</a>
    </p>
    <p>Address: ${local.venue.location.address}</p>
  </div>`;
  }

  alteraQuery = query => {
    this.setState({
      query
    });
    if (query) {
      this.setState({
        locais: this.filtraLocais(query, this.state.locais)
      });
    } else {
      this.setState({
        locais: this.state.queryLocais
      });
    }
  };

  filtraLocais = (query, locais) => {
    return locais.filter(local => local.venue.name.toLowerCase().includes(query.toLowerCase()));
  };

  render() {
    return (
      <div className = "conteudo">
        <Lista
          locais = {this.state.locais}
          mostraConteudo = {this.mostraConteudo}
          query = {this.state.query}
          alteraQuery = {this.alteraQuery}
        />
        <Mapa
          locais = {this.state.locais}
          preparaConteudo = {this.preparaConteudo}
        />
      </div>
    );
  }
}

export default Conteudo;
