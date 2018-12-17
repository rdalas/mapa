import React, { Component } from 'react';

class Lista extends Component {
  render() {
    let classe = 'lista';
    const locais = this.props.locais;
    // Altera o CSS da div para abrir a lista
    if (this.props.visivel) {
      classe = 'lista open';
    }
    return (
      <div className={classe}>
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
