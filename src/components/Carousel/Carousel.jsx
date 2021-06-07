import './Carousel.css';
import { Component } from 'react';

class Carousel extends Component {
    constructor (props) {
        super(props)
        this.state = {
            imgs: this.props.imgs,
            current: 0
        }
    }
    
    handleCarouselLeft = () => {
        const { imgs, current } = this.state;
        (current !== 0) ? this.setState({current: current - 1}) : this.setState({current: imgs.length-1});
    }

    handleCarouselRight = () => {
        const { imgs, current } = this.state;
        (current === imgs.length-1) ? this.setState({current: 0}) : this.setState({current: current + 1});
    }

    render () {
        return (
            <div className="carousel">
                <i className="fas fa-chevron-left" onClick={this.handleCarouselLeft}></i>
                <img src={this.state.imgs[this.state.current]} alt={this.handleCarousel}/>
                <i className="fas fa-chevron-right" onClick={this.handleCarouselRight}></i>
            </div>
        )
    }
}

export default Carousel;