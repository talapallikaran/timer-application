import { Component } from 'react';
import './UserInput.css';

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userTime: "",
      convertedTime: ""
    }
  }

  _handleUserInput = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({ userTime: e.target.value })
    }
  }

  _convertToTime = (time) => {
    const { timeProps } = this.props;
    const { userTime } = this.state;
    timeProps(userTime);
  }

  render() {
    const { userTime } = this.state;
    return (
      <div className="user-input">
        <label>Countdown</label>
        <input className="user-minute-input" value={userTime} onChange={(e) => this._handleUserInput(e)} />
        <button onClick={() => this._convertToTime(userTime)}>Start</button>
      </div>
    );
  }
}

export default UserInput;
