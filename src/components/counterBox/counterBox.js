import React from "react";
import styled from "styled-components";

const Time = styled.h1`
   color: #fff;
  font-size: 1.5em;
  text-align: center;
  font-weight: bold;
`;

const Label = styled.h1`
  color: #fff;
  font-size: 1em;
  text-align: center;
  font-weight: bold;
`;

const Box = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-shadow: 0 1px 2px #000;
  background-color: #333
  box-shadow: 0 2px 5px rgba(0, 0, 0, .7);
  height: 100px;
`;

export const CounterBox = ({ label, value }) => (
  <Box>
    <Time>{value}</Time>
    <Label>{label}</Label>
  </Box>
);
