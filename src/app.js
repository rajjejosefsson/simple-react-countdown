import React from "react";
import { Countdown } from "./containers/countdown";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { LanguageSwticher } from "./components/languageSwitcher";

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

const dayLabel = <FormattedMessage id="days" defaultMessage="Days" />;
const hoursLabel = <FormattedMessage id="hours" defaultMessage="Hours" />;
const minutesLabel = <FormattedMessage id="minutes" defaultMessage="Minutes" />;
const secondsLabel = <FormattedMessage id="seconds" defaultMessage="Seconds" />;

export const App = () => {
  const countdownDate = "2018-09-24T00:00:00";
  return (
    <div>
      <Nav>
        <LanguageSwticher />
      </Nav>
      <Main>
        <h1>Countdown</h1>
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
