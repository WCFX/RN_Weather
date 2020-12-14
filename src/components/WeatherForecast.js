import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import Sun from '../assets/sun.png';

const DayOfTheWeek = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const DayOfTheWeekText = styled.Text``;
const Weather = styled.Image`
  width: 26px;
  height: 26px;
`;

const WeatherForecast = (props) => (
  <>
    <DayOfTheWeek>
      <DayOfTheWeekText>Hoje</DayOfTheWeekText>
      <Weather source={Sun} />
    </DayOfTheWeek>
  </>
);

export default WeatherForecast;
