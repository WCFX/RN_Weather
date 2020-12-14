import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #222;
`;

export const Title = styled.Text`
  font-size: 22px;
  padding: 20px 0 0 20px;
  color: #e9e9e9;
`;

export const TextArea = styled.View`
  flex-direction: row;
  height: 80px;
  width: 95%;
  padding: 10px;
  margin: 10px 20px;
  align-items: center;
`;

export const Input = styled.TextInput`
  border: 1px solid #e9e9e9;
  width: 95%;
  height: 50px;
  border-radius: 20px;
  color: #fff;
  padding-left: 50px;
`;

export const ContainerResults = styled.View`
  border: 1px solid #222;
  background-color: #455e7d;
  height: 100px;
  justify-content: space-between;
  padding: 0 20px;
  margin: 10px;
  border-radius: 12px;
  width: 95%;
  align-items: center;
  flex-direction: row;
`;

export const CityInfo = styled.Text`
  font-size: 26px;
  color: #e9e9e9;
`;

export const Temperature = styled.Text`
  font-size: 32px;
  color: #e9e9e9;
`;
