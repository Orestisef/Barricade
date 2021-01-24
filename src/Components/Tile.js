import React, {Component} from 'react'

export default class Tile extends Component {

    render(){
        console.log(this.props.number)
        let tileType
        if (this.props.number === 0) {
            tileType = "invisible"
        }
        else if (this.props.number === 1) {
            tileType = "tile"
        }
        else if (this.props.number === 2) {
            tileType = "tile barricade"
        }
        else if (this.props.number === 3) {
            tileType = "tile goal"
        }
        else {
            tileType = "tile players"
        }

        return(
            <div className={tileType}>
                 {this.props.number}
            </div>
        )
    }
}