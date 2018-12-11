import React, { Component } from 'react';

class Lista extends Component {
  render() {
    const locais = this.props.locais;
    return (
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
    );
  }
}

export default Lista;
