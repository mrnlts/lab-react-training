import { Component } from 'react';
import '../RGBColorPicker/RGBColorPicker.css';
class SingleColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      selfValue: 0,
    };
  }

  handleChange = (e) => {
    this.props.onChange(e);
    this.setState({ selfValue: e.target.value });
  };

  render() {
    const { color, selfValue } = this.state;
    const colorString =
      color === 'r'
        ? `${selfValue}, 0, 0`
        : color === 'g'
        ? `0, ${selfValue}, 0`
        : `0, 0, ${selfValue}`;
    return (
      <div className="flex">
        <div
          className="RGBbox"
          style={{ backgroundColor: `rgb(${colorString})` }}
        ></div>
        <p>{color.toUpperCase()}: </p>
        <input
          type="number"
          value={selfValue}
          max="255"
          min="0"
          name={color}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SingleColorPicker;
