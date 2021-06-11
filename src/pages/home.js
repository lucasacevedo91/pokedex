import React, { Component } from 'react';

class Home extends Component {
    state = {

    }
    render() { 
        return (
            <div>
                <div className="h1">HOME</div>
            </div>
        );
    }
}
 
export default Home;

// fetch('https://pokeapi.co/api/v2/pokemon/butterfree/').then(res => res.json()).then((res) => {console.log(res.sprites.front_default)})