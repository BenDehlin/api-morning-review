import {Component} from 'react'
import Friends from './Friends'
import axios from 'axios'

class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            // friends: [
            //     {first_name: 'Aaron', last_name: 'Manwill', age: 28},
            //     {first_name: 'Bob', last_name: 'Person', age: 25},
            // ],
            pokemon: []
        }
    }

    componentDidMount(){
        axios.get('https://api.pokemontcg.io/v1/cards').then((res) => {
            console.log(res.data.cards)
            this.setState({pokemon: res.data.cards})
        })
    }

    deleteFriend = (id) => {
        let pokemon = [...this.state.pokemon]
        const index = pokemon.findIndex((e) => e.id === id)
        pokemon.splice(index, 1)
        this.setState({pokemon: pokemon})
    }

    render(){
        return(
            <div>
                <h1>Dashboard</h1>
                <Friends friends={this.state.pokemon} deleteFriend={this.deleteFriend} />
            </div>
        )
    }
}

export default Dashboard