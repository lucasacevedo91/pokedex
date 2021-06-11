import React, { Component } from 'react'

class GameCard extends Component {
    state = {

    }

    getDataForEach = (url) => {
        fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res);
        })
    }

    componentDidMount(){
        this.getDataForEach(this.props.url)
    }

    fixTitle(str){
        return str.replace(/-/g, " ")
    }

    render() { 
        return (
            <div className="card col-3 my-2 p-0" style={{minWidth: '150px', margin: '0 5px'}}>
                <div className="card-header" style={{textTransform: 'capitalize'}}>
                    <strong>Pokémon {this.fixTitle(this.props.version)}</strong>
                </div>
                <div className="card-body">
                    <img src={'./assets/'+(this.props.version)+'.jpg'} alt={this.props.version} className='w-100' />
                </div>
            </div>
        );
    }
}
 
export default GameCard;