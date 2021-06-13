import './RGBColorPicker.css';
import { Component } from 'react';

class RGBColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rValue: 0,
      gValue: 0,
      bValue: 0,
    };
  }
  paint = (e) => {
    e.target.name === 'r'
      ? this.setState({ rValue: e.target.value })
      : e.target.name === 'g'
      ? this.setState({ gValue: e.target.value })
      : this.setState({ bValue: e.target.value });
  };

  render() {
    let { rValue, gValue, bValue } = this.state;

    return (
      <div>
        <div className="flex">
          <div
            className="RGBbox"
            style={{ backgroundColor: `rgb(${rValue}, 0, 0)` }}
          ></div>
          <p>R: </p>
          <input
            type="number"
            value={rValue}
            max="255"
            min="0"
            name="r"
            onChange={this.paint}
          />
        </div>
        <div className="flex">
          <div
            className="RGBbox"
            style={{ backgroundColor: `rgb(0, ${gValue}, 0)` }}
          ></div>
          <p>G: </p>
          <input
            type="number"
            value={gValue}
            max="255"
            min="0"
            name="g"
            onChange={this.paint}
          />
        </div>
        <div className="flex">
          <div
            className="RGBbox"
            style={{ backgroundColor: `rgb(0, 0, ${bValue})` }}
          ></div>
          <p>B: </p>
          <input
            type="number"
            value={bValue}
            max="255"
            min="0"
            name="b"
            onChange={this.paint}
          />
        </div>
      </div>
    );
  }
}

export default RGBColorPicker;
