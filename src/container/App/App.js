import { Component } from 'react';
import TimerControl from '../../components/TimerControl';
import TimerMain from '../../components/TimerMain';
import UserInput from '../../components/UserInput';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeVal: '',
      timeSpeed: 1,
    }
  }

  _getTime = (time) => {
    this.setState({ timeVal: time })
  }

  _getSpeed = (speed) => {
    this.setState({ timeSpeed: speed })
  }

  render() {
    const { timeVal, timeSpeed } = this.state;
    return (
      <div className="App">
        <div className="app-wrapper">
          <div className="app-inner">
            <UserInput timeProps={(time) => this._getTime(time)} />
            <TimerMain timeValue={timeVal} timeSpeed={timeSpeed} />
            <TimerControl timeSpeedProps={(speed) => this._getSpeed(speed)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
