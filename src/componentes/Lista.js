import React, { Component } from 'react';

class Lista extends Component {
  render() {
    const locais = this.props.locais;
    //Icons made by Icons8 https://icons8.com/icon/8113/menu-filled
    return (
      <div className="cabecalho">
        <label for="menu" className="cabecalhologo">Bares Ribeirão Preto <img alt="" src="https://img.icons8.com/ios/50/000000/menu-filled.png"/></label>
        <input type="checkbox" id="menu"/>
        <div className="lista">
          <h2>Filtra Locais</h2>
          <input type="text"
            className="buscaitem"
            value={this.props.query}
            onChange={e => this.props.alteraQuery(e.target.value)}
          />
          <ol>
            {locais.map(local => (
              <li key={local.venue.id}>
                <a href="#" onClick={() => this.props.mostraConteudo(local)}>
                  {local.venue.name}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Lista;
