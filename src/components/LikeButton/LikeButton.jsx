import './LikeButton.css';
import { Component } from 'react';

class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        }
    }
    
    handleIncrease = () => {
        this.setState({num: this.state.num + 1})
    };

    render () {
        return (
            <button className="like-btn" onClick={this.handleIncrease}>{this.state.num} Likes</button>
        )
    }
}

export default LikeButton;