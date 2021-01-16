import React, {Component} from 'react'

export default class Tile extends Component {

    render(){
        console.log(this.props.number)
        return(
            <div className={this.props.number != 0 ? "tile" : "invisible"} >
                 {this.props.number}
            </div>
        )
    }
}