import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import {
  Container,
  Title,
  ContainerTemperature,
  TemperatureText,
  ContainerFlex,
  DescriptionWeather,
  AirQualityIndexButton,
  AirQualityIndexText,
  ContainerWeatherForecast,
  MoreDetails,
  FiveDayForecastButton,
  FiveDayForecastText,
} from './styles';

import WeatherForecast from '../../components/WeatherForecast';

const Home = () => {
  const [location, setLocation] = useState('Canoas', 'RS');
  const [currentTemperature, setCurrentTemperature] = useState('22');

  return (
    <Container>
      <ContainerTemperature>
        <ContainerFlex>
          <TemperatureText>{currentTemperature}</TemperatureText>
          <Text style={{ fontSize: 24, color: '#e9e9e9' }}>°c</Text>
        </ContainerFlex>
        <DescriptionWeather>Nublado</DescriptionWeather>
        <AirQualityIndexButton>
          <AirQualityIndexText>IQA 16</AirQualityIndexText>
        </AirQualityIndexButton>
      </ContainerTemperature>

      <ContainerWeatherForecast>
        <MoreDetails>Mais detalhes > </MoreDetails>
        <WeatherForecast />
        <WeatherForecast />
        <WeatherForecast />
        <FiveDayForecastButton>
          <FiveDayForecastText>Previsão para 5 dias</FiveDayForecastText>
        </FiveDayForecastButton>
      </ContainerWeatherForecast>
    </Container>
  );
};

export default Home;
