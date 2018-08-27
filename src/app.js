import React from "react";
import { Countdown } from "./containers/countdown";
import styled from "styled-components";
import { LanguageSwitcher } from "./components/languageSwitcher";
import {
  dayLabel,
  hoursLabel,
  minutesLabel,
  secondsLabel
} from "./i18n/formattedMessages/countdown";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  align-self: flex-start;
`;

export const App = () => {
  const countdownDate = "2018-09-24T00:00:00";
  return (
    <div>
      <Nav>
        <LanguageSwitcher />
      </Nav>
      <Main>
        <Title>Starts In</Title>
        <Countdown date={countdownDate}>
          <Countdown.Days label={dayLabel} />
          <Countdown.Hours label={hoursLabel} />
          <Countdown.Minutes label={minutesLabel} />
          <Countdown.Seconds label={secondsLabel} />
        </Countdown>
      </Main>
    </div>
  );
};
