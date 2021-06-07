import { Component } from 'react';
import './Dice.css';

class Dice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sides: ['./img/dice1.png', './img/dice2.png', './img/dice3.png', './img/dice4.png', './img/dice5.png', './img/dice6.png'],
            empty: './img/dice-empty.png' ,
            current: './img/dice1.png'
        }
    }

    handleDice = () => {
        const num = Math.round(Math.random() * 5);
        this.setState({current: this.state.empty});
        setTimeout(() => this.setState({current: this.state.sides[num]}), 1000);
    }

    render () {
        console.log(this.state.current, this.state.empty, this.state.sides[0])
        return (
            <img className="dice" src={this.state.current} onClick={this.handleDice} alt="dice"/>
        )
    }

}

export default Dice;