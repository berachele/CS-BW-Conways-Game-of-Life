import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Grid from './grid'


// Box class
// class Box extends React.Component{
//   selectBox = () => {
//       this.props.selectBox(this.props.row, this.props.columns)
//   }

//   render(){
//     return(
//         <div 
//             className={this.props.boxClass}
//             id={this.props.id}
//             onClick={this.selectBox}
//         />
//     )
//   }
// }

// Grid class
// class Grid extends React.Component{

//   render(){
//     const width = (this.props.columns * 14)
//     var rowsArr = []

//     var boxClass = ""
//     for (var x = 0; x < this.props.rows; x++){
//         for (var y = 0; y < this.props.columns; y++){
//             let boxId = x + "_" + y

//             boxClass = this.props.gridFull[x][y] ? "box on" : "box off"
//             rowsArr.push(
//               <Box 
//                   boxClass={boxClass}
//                   key={boxId}
//                   boxId={boxId}
//                   row={x}
//                   columns={y}
//                   selectBox={this.props.selectBox}
//               />
//             )
//         }
//     }

//   return(
//     <div className="grid" style={{width: width}}>
//         {rowsArr}
//     </div>
//   )
//   }
// }

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

  //function when we click Play button
  playButton = () => {
    clearInterval(this.intervalId)
    this.intervalId = setInterval(this.play, this.speed)
  }

  //play method--using two grids for double buffering, switching intervals
  play = () => {
    let grid1 = this.state.gridFull
    let grid2 = arrayClone(this.state.gridFull)

    for (let x = 0; x < this.rows; x++){
      for(let y = 0; y < this.columns; y++){
        let count = 0
        //checking all the neighbors
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
          selectBox={this.selectBox}
        />
        <h2>Generation: {this.state.generation}</h2>
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