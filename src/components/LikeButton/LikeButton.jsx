import './LikeButton.css';
import { Component } from 'react';

class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
            colors: ['purple','blue','green','yellow','orange','red'],
            currentColor : 0
        }
    }

    handleIncrease = () => {
        const { currentColor, num } = this.state;
        this.setState({
            num: num + 1,
            currentColor: (currentColor < 5) ? currentColor + 1 : 0
        })
    };

    render () {
        const { currentColor, colors } = this.state;
        return (
            <button 
                className="like-btn" 
                onClick={this.handleIncrease} 
                style={{backgroundColor: `${colors[currentColor]}` }}
            >
                {this.state.num} Likes
            </button>
        )
    }
}

export default LikeButton;