import React, { Component } from 'react';

class Cabecalho extends Component {
  render() {
    return (
      <header className="cabecalho">
        <nav className="cabecalhonav">
          <div className="cabecalhologo">Bares em Ribeirão Preto</div>
          //Botao para abrir e fechar a lista de locais
          <button className="botao" onClick = {this.props.abreLista}>
            <div className="linhabotao"></div>
            <div className="linhabotao"></div>
            <div className="linhabotao"></div>
          </button>
        </nav>
      </header>
    );
  }
}

export default Cabecalho;
