import { Component } from 'react';
import TimeConverter from '../../utils/TimeConverter';
import './TimerMain.css';

class TimerMain extends Component {
  constructor(props) {
    super(props);
    this.timer = 0;
    this.totalTime = 0;
    this.state = {
      isPaused: true,
      time: "",
      timer: 0,
      totalTime: 0,
      halfWay: false,
      timesUp: false
    }
  }

  componentDidUpdate(prevProps) {
    const { timeValue, timeSpeed } = this.props;
    if (prevProps.timeValue !== timeValue) {
      this.setState({ time: TimeConverter(timeValue), totalTime: timeValue, isPaused: false, });
      this.startTimer(timeValue, timeSpeed);
    }

    if (prevProps.timeSpeed !== timeSpeed) {
      this.timer = 0;
      const { totalTime } = this.state;
      this.setState({ totalTime });
      this.startTimer(totalTime, timeSpeed);
    }
  }

  startTimer = (timeValue, timeSpeed) => {
    if (this.timer === 0 && timeValue > 0) {
      this.setState({ totalTime: timeValue })
      clearInterval(this.timer);
      this.timer = setInterval(this._timerCountDown, 1000 / timeSpeed);
    }
  }

  _timerCountDown = () => {
    const { timeValue } = this.props;
    const { totalTime } = this.state;
    let reduceTime = totalTime - 1;
    this.setState({
      time: TimeConverter(reduceTime),
      totalTime: reduceTime
    })
    if (totalTime === (timeValue / 2) + 2) {
      this.setState({
        halfWay: true
      })
    }
    if (totalTime < 20) {
      this.setState({
        halfWay: true
      })
    }
    if (totalTime <= 1) {
      this.setState({ timesUp: true })
      clearInterval(this.timer);
    }
  }

  _pausePlayTimer = (isPaused) => {
    if (isPaused) {
      this.timer = setInterval(this._timerCountDown, 1000);
    } else {
      clearInterval(this.timer);
    }
    this.setState({ isPaused: !isPaused })
  }

  render() {
    const { time, isPaused, halfWay, timesUp, totalTime } = this.state;
    return (
      <div className="main-timer-view">
        <div className="timer-label">{timesUp ? "" : halfWay ? "More than halfway there!" : ""}</div>
        <div className={`timer-time ${totalTime < 10 ? "blinking" : ""}`} style={{ color: `${totalTime < 20 ? "red" : ""}` }}>{timesUp ? "" : time ? time : ""}</div>
        <div className="timer-timesup">{timesUp ? "Times up" : ""}</div>
        <div className="play-pause-button" onClick={() => this._pausePlayTimer(isPaused)}>{timesUp ? "" : time.length ? isPaused ? "Play" : "Pause" : ""}</div>
      </div>
    );
  }
}

export default TimerMain;
