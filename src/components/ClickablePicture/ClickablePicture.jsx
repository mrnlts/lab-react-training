import './ClickablePicture.css';
import { Component } from 'react';

class ClickablePicture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPic: this.props.img
        }
    }

    handleGlasses = () => {
        const { img, imgClicked } = this.props;
        this.setState({
            currentPic: (this.state.currentPic === img) ? imgClicked : img})
    }

    render() {
        return (
            <img className="clickable" src={this.state.currentPic} alt="clickable" onClick={this.handleGlasses}></img>
        )
    }
}

export default ClickablePicture;