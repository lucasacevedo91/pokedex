import React, { Component } from 'react'
import GameCard from '../components/gameCard'
import GenButton from '../components/genButton'
import Title from '../components/title'

class Game extends Component {
    state = {
        generation: 0,
        data: {},
        versions: []
    }

    getDataForGens = (gen) => {
        const url = "https://pokeapi.co/api/v2/generation/" + gen
        fetch(url)
        .then(res => res.json())
        .then(res => {
            res.version_groups.map((group) => {
                this.getDataForVersions(group.url);
            })
            this.setState({ generation: gen, data: res});
        })
    }

    getDataForVersions = (params) => {
        this.setState({ versions: [] });
        const url = params
        fetch(url)
            .then(res => res.json())
            .then(res => {
                res.versions.map(v => {
                    let vers = this.state.versions
                    vers.push(v)
                    this.setState({ versions: vers });
                })
                //this.setState({ generation: gen, data: res});
            })
    }

    conditionalRender = () => {
        if (this.state.generation === 0){
            return (
                <img className='w-100' src="https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/forest.jpg" alt="fondo" />
            )
        } else {
            return(
                <div className="container">
                    <Title>Generation {this.state.generation}</Title>
                    <div>
                        <p>This game's story develops in the region of {this.state.data.main_region.name}</p>
                        <div className='row justify-content-around'>
                            {
                                this.state.versions.map((v, i) => {
                                    return <GameCard key={i} version={v.name} url={v.url} />
                                })
                            }
                        </div>
                    </div>
                </div>
            )
        }
    }
    

    render() { 
        const generations = [
            'Gen 1',
            'Gen 2',
            'Gen 3',
            'Gen 4',
            'Gen 5',
            'Gen 6',
            'Gen 7',
            'Gen 8',
        ]
        return (
            <div>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark m2'>
                    {
                        generations.map((gen, i) => {
                            return(
                                <GenButton 
                                    generation={i+1}
                                    key={i}
                                    onClick={() => {this.getDataForGens(i+1)}}
                                />
                            )
                        })
                    }
                </nav>
                {this.conditionalRender()}
            </div>
        )
    }
}
 
export default Game;