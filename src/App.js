import React from 'react';
import Grid from 'react-css-grid'
import Tile from './Components/Tile'


import './App.css';

class App extends React.Component {

  gameBoard = {
    boardTiles: 
                [0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,
                1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,
                0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,
                0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,0,
                0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,
                0,0,0,0,1,1,2,1,1,1,2,1,1,0,0,0,0,
                0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,
                0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
                0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,
                2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,
                1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                0,0,4,0,0,0,5,0,0,0,6,0,0,0,7,0,0,
                0,0,4,0,0,0,5,0,0,0,6,0,0,0,7,0,0,
                0,0,4,0,0,0,5,0,0,0,6,0,0,0,7,0,0]
  }


  state = {
    startTiles: [],
    leftWall: [],
    rightWall: [],
    currentTile: 0,
    canMoveTo: [],
    didStart: false
  }

  createBoard = () => {
  
    return this.occupyTiles(this.gameBoard.boardTiles)
  }

  occupyTiles = (tileArray) => {
    return tileArray.map(number => (
       <Tile number={number} />
    ))  
  }

  render(){
    return (
      <div className="game-board">
        <Grid
            width={50}
            gap={12}
            >
            {this.createBoard()}
        </Grid>
      </div>
    );
  }
}

export default App;