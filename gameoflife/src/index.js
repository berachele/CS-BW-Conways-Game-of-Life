import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Grid from './grid';
import Buttons from './buttons';
import {Collapse, CardBody, Card, Button} from 'reactstrap'

//Main menu/screen
class Main extends React.Component{
  constructor(){
    super()
    this.speed = 100
    this.rows = 25
    this.columns = 25

    this.state = {
      // generation counter
      generation: 0,
      //to change size of Grid--making two arrays with # of rows/cols
      gridFull: Array(this.rows).fill().map(() => Array(this.columns).fill(false)),
      isOpen: false
    }
  }
  //to toggle Rules button
  toggle = () => this.setState({isOpen: !this.state.isOpen})

  //selectBox method to toggle dead/alive cells
  selectBox = (row, column) => {
    let gridCopy = arrayClone(this.state.gridFull)
    gridCopy[row][column] = !gridCopy[row][column]
    this.setState({
      gridFull: gridCopy
    })
  }

  //method to automatically fill grid with cells randomly
  seedGrid = () => {
    let gridCopy = arrayClone(this.state.gridFull)
    for (let x = 0; x < this.rows; x++){
      for (let y = 0; y < this.columns; y++){
        if (Math.floor(Math.random() * 4) === 1){
          gridCopy[x][y] = true
        }
      }
    }
    this.setState({
      gridFull: gridCopy
    })
  }

  "BUTTONS"
  //function when we click Play button
  playButton = () => {
    clearInterval(this.intervalId)
    this.intervalId = setInterval(this.play, this.speed)
  }

  stopButton = () => {
    clearInterval(this.intervalId)
  }

  slowSpeed = () => {
    this.speed = 1000;
    this.playButton()
  }

  fastSpeed = () => {
    this.speed = 50;
    this.playButton()
  }

  clearGrid = () => {
    var grid = Array(this.rows).fill().map(() => Array(this.columns).fill(false))
    this.setState({
      gridFull: grid,
      generation: 0
    })
    this.stopButton()
    this.speed = 100
  }

  gridSize = (size) => {
    console.log({size})

    switch (size) {
      case "1":
        this.columns = 25
        this.rows = 25
        break
      case "2":
        this.columns = 50
        this.rows = 50
        break
      default:
        this.columns = 70
        this.rows = 50
        break
    }
    this.clearGrid()
  }

  //play method--using two grids for double buffering, switching intervals
  play = () => {
    let grid1 = this.state.gridFull
    let grid2 = arrayClone(this.state.gridFull)

    for (let x = 0; x < this.rows; x++){
      for(let y = 0; y < this.columns; y++){
        //count = neighbor
        let count = 0
        //checking all neighbors around cell
        if (x > 0) if (grid1[x - 1][y]) count++
        if (x > 0 && y > 0) if (grid1[x - 1][y - 1]) count++
        if (x > 0 && y < this.columns - 1) if (grid1[x - 1][y + 1]) count++
        if (y < this.columns -1) if (grid1[x][y + 1]) count++
        if (y > 0) if (grid1[x][y - 1]) count++
        if (x < this.rows - 1) if (grid1[x + 1][y]) count++
        if (x < this.rows - 1 && y > 0) if (grid1[x + 1][y - 1]) count++
        if (x < this.rows - 1 && y < this.columns -1) if (grid1[x + 1][y + 1]) count++
        //rules--if less than 2 neighbors or more than 3 live neighbors, cell dies
        if (grid1[x][y] && (count < 2 || count > 3)) grid2[x][y] = false
        //if dead cell has exactly 3 neighbors, cell is alive
        if (!grid1[x][y] && count === 3) grid2[x][y] = true
      }
    }
    this.setState({
      //updateing current grid with new interval
      gridFull: grid2,
      //adding 1 to generation counter
      generation: this.state.generation + 1
    })
  }

  //seed the grid as soon as it loads
  componentDidMount(){
    this.seedGrid()
    this.playButton()
  }

  render() {
    return (
      <div>
        <h1>Conway's Game of Life</h1>
        <Buttons 
          playButton={this.playButton}
          stopButton={this.stopButton}
          clearGrid={this.clearGrid}
          slowSpeed={this.slowSpeed}
          fastSpeed={this.fastSpeed}
          seedGrid={this.seedGrid}
          gridSize={this.gridSize}
        />
        <Grid 
          gridFull={this.state.gridFull}
          rows={this.rows}
          columns={this.columns}
          selectBox={this.selectBox}
        />
        <h2>Generation: {this.state.generation}</h2>
        <Button className="rules" onClick={this.toggle}>RULES</Button>
        <Collapse isOpen={this.state.isOpen}>
            <Card>
                <CardBody>
                    <h4>There are two rules to the Game of Life:</h4>
                    <p>1. If a live cell has either less than 2 neighbors or more than 3 nieghbors: it dies</p>
                    <p>2. If a dead cell has exactly 3 neightbors, it comes alive</p>
                    <p>Other notes: You may click on the squares to create your own cells, or randomly start a generated grid with the 'Seed' button</p>
                </CardBody>
            </Card>
        </Collapse>
      </div>
    )
  }
}

//makes copy of array--for double buffering in grid
function arrayClone(arr){
  return JSON.parse(JSON.stringify(arr))
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