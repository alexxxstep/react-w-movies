import React, { Component } from 'react';
import { moviesData } from '../moviesData';

// console.log(moviesData)

class App extends Component {

  constructor() {
    super()

    this.state = {
      movies: moviesData,

    }

  }


  render() {
    console.log(this);
    return (
      <div>{this.state.movies.map(
        function(movie) {
          return <p>{movie.title}</p>

        }
      )}</div>
    )
  }
}

export default App;