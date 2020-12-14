import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #87c2d6;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #f0f;
`;

export const ContainerTemperature = styled.View`
  border: 1px solid red;
  height: 500px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;
export const ContainerFlex = styled.View`
  flex-direction: row;
`;

export const TemperatureText = styled.Text`
  font-size: 124px;
  margin-top: -30px;
  color: #e9e9e9;
`;

export const DescriptionWeather = styled.Text`
  color: #e9e9e9;
`;

export const AirQualityIndexButton = styled.TouchableOpacity``;

export const AirQualityIndexText = styled.Text`
  color: #e9e9e9;
`;

export const ContainerWeatherForecast = styled.View``;

export const MoreDetails = styled.Text``;

export const WeatherForecast = styled.Text``;

export const FiveDayForecastButton = styled.TouchableOpacity``;

export const FiveDayForecastText = styled.Text``;
