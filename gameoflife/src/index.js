import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Grid from './grid'

//Main menu/screen
class Main extends React.Component {
  constructor(){
    super()
    this.speed = 100
    this.rows = 30
    this.columns = 50

    this.state = {
      // generation counter
      generation: 0,
      //to change size of Grid--making two arrays with # of rows/cols
      gridFull: Array(this.rows).fill().map(() => Array(this.columns).fill(false))
    }
  }

  render() {
    return (
      <div>
        <h1>Conway's Game of Life</h1>
        {/* Will add buttons later */}
        <Grid 
        gridFull={this.state.gridFull}
        rows={this.rows}
        columns={this.columns}
        />
        <h2>Generations: {this.state.generation}</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
