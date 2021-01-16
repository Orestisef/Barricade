import React, {Component} from 'react'

export default class Tile extends Component {

    render(){
        console.log(this.props.number)
        return(
            <div className="tile" >
                 {this.props.number}
            </div>
        )
    }
}