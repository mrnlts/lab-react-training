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
  paint = () => {
    let valueR = document.getElementById('valueR');
    let valueG = document.getElementById('valueG');
    let valueB = document.getElementById('valueB');

    return this.setState({
      rValue: valueR,
      gValue: valueG,
      bValue: valueB,
    });
  };

  render() {
    let { rValue, gValue, bValue } = this.state;

    return (
      <div>
        <div
          className="RGBbox"
          style={{ backgroundColor: `rgb(${rValue}, 0, 0)` }}
        ></div>
        <p>R: </p>
        <input
          type="number"
          value="0"
          id="valueR"
          max="255"
          min="0"
          onChange={this.paint}
        />

        <div
          className="RGBbox"
          style={{ backgroundColor: `rgb(0, ${gValue}, 0)` }}
        ></div>
        <p>G: </p>
        <input
          type="number"
          value="0"
          id="valueG"
          max="255"
          min="0"
          onChange={this.paint}
        />

        <div
          className="RGBbox"
          style={{ backgroundColor: `rgb(0, 0, ${bValue})` }}
        ></div>
        <p>B: </p>
        <input
          type="number"
          value="0"
          cid="valueB"
          max="255"
          min="0"
          onChange={this.paint}
        />
      </div>
    );
  }
}

export default RGBColorPicker;
