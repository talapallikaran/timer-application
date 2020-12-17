import { Component } from 'react';
import './TimerControl.css';

class TimerControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 1
    }
  }

  _updateSpeed = (speedValue) => {
    const { timeSpeedProps } = this.props;
    timeSpeedProps(speedValue);
  }

  render() {
    return (
      <div className="timer-speed-controls">
        <button onClick={() => this._updateSpeed(1)}>1X</button>
        <button onClick={() => this._updateSpeed(1.5)}>1.5X</button>
        <button onClick={() => this._updateSpeed(2)}>2X</button>
      </div>
    );
  }
}

export default TimerControl;
