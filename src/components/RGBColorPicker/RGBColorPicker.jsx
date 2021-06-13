import './RGBColorPicker.css';
import { Component } from 'react';
import SingleColorPicker from '../SingleColorPicker/SingleColorPicker';

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
    console.log(e.target.name);
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
        <SingleColorPicker color="r" onChange={this.paint} />
        <SingleColorPicker color="g" onChange={this.paint} />
        <SingleColorPicker color="b" onChange={this.paint} />
        <div className="flex">
          <div
            className="RGBbox"
            style={{ backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})` }}
          />
          <p>
            rgb({rValue}, {gValue}, {bValue})
          </p>
        </div>
      </div>
    );
  }
}

export default RGBColorPicker;
