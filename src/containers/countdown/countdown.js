import React, { Component } from "react";
import { CounterBox } from "../../components/counterBox";
import styled from "styled-components";
import { addLeadingZeros } from "../../helpers/leadingZero";

const CountdownContainer = styled.div`
  display: flex;
  width: 100%;
`;

const CountdownContext = React.createContext();

const Seconds = ({ label = "Seconds" }) => (
  <CountdownContext.Consumer>
    {({ seconds }) => (
      <CounterBox label={label} value={addLeadingZeros(seconds)} />
    )}
  </CountdownContext.Consumer>
);

const Minutes = ({ label = "Minutes" }) => (
  <CountdownContext.Consumer>
    {({ minutes }) => (
      <CounterBox label={label} value={addLeadingZeros(minutes)} />
    )}
  </CountdownContext.Consumer>
);

const Hours = ({ label = "Hours" }) => (
  <CountdownContext.Consumer>
    {({ hours }) => <CounterBox label={label} value={addLeadingZeros(hours)} />}
  </CountdownContext.Consumer>
);

const Days = ({ label = "Days" }) => (
  <CountdownContext.Consumer>
    {({ days }) => <CounterBox label={label} value={addLeadingZeros(days)} />}
  </CountdownContext.Consumer>
);

export class Countdown extends Component {
  static Seconds = Seconds;
  static Minutes = Minutes;
  static Hours = Hours;
  static Days = Days;

  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  intervalID = null;

  componentDidMount() {
    this.startCountdown();
  }

  componentWillUnmount() {
    this.stopCountdown();
  }

  startCountdown = () => {
    this.intervalID = setInterval(() => {
      const runningDate = this.calculateCountdown(this.props.date);
      runningDate ? this.setState(runningDate) : this.stopCountdown();
    }, 1000);
  };

  stopCountdown = () => {
    clearInterval(this.intervalID);
  };

  calculateCountdown = endDate => {
    const now = Date.parse(endDate);
    const end = Date.parse(new Date());
    const timeLeft = now - end;

    const seconds = Math.floor((timeLeft / 1000) % 60);
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

    return { seconds, minutes, hours, days };
  };

  render() {
    return (
      <CountdownContext.Provider value={this.state}>
        <CountdownContainer>{this.props.children}</CountdownContainer>
      </CountdownContext.Provider>
    );
  }
}
