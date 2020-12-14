import React from 'react';
import { Foundation, Ionicons } from '@expo/vector-icons';
import {
  Container,
  Title,
  TextArea,
  Input,
  ContainerResults,
  CityInfo,
  Temperature,
} from './styles';

const SearchAdress = () => (
  <Container>
    <Title>Gerenciar Cidades</Title>
    <TextArea>
      <Foundation
        style={{ position: 'absolute', left: 30 }}
        name="magnifying-glass"
        size={24}
        color="#e9e9e9"
      />
      <Input placeholder="Seu local" placeholderTextColor="#a0a0a0" />
    </TextArea>
    <ContainerResults>
      <CityInfo>
        Canoas <Ionicons name="location-outline" size={24} color="#e9e9e9" />
      </CityInfo>
      <Temperature>22°</Temperature>
    </ContainerResults>
    <ContainerResults style={{ backgroundColor: '#424b54' }}>
      <CityInfo>
        Canoas <Ionicons name="location-outline" size={24} color="#e9e9e9" />
      </CityInfo>
      <Temperature>22°</Temperature>
    </ContainerResults>
  </Container>
);

export default SearchAdress;
