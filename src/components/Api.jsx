import React, { Component } from "react";

class Api extends Component {
  constructor() {
    super();
    this.state = {
      caracters: [],
    }
  }
  fetchCaracters = () => {
    fetch('https://rickandmortyapi.com/api/character').then(response =>
      response.json().then(({ results }) => this.setState({ caracters: results }))
    );
  };

  componentDidMount() {
    this.fetchCaracters();
  }

  render() {
    console.log('render');
    const { caracters } = this.state;
    return (
      <>
        <h1>Personagens</h1>
        {caracters.map(data => (
          <div key={ data.name }>
            <p>{ data.name }</p>
            <img src={ data.image } alt={ data.name } />
          </ div>
        ))}
      </>
    );
  }
}
export default Api;
