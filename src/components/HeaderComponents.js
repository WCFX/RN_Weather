import React from 'react';
import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const Button = styled.TouchableOpacity`
  margin-top: 20px;
  height: 50px;
  width: 50px;
  margin-left: 20px;
`;

const ButtonText = styled.Text``;

export const ButtonRight = () => {
  const { navigate } = useNavigation();

  function handleNavigateToSearch() {
    navigate('SearchAdress');
  }
  return (
    <Button onPress={handleNavigateToSearch}>
      <ButtonText>
        <Feather name="plus" size={28} color="#e9e9e9" />
      </ButtonText>
    </Button>
  );
};

export const ButtonLeft = () => (
  <Button>
    <ButtonText>
      <MaterialCommunityIcons name="dots-vertical" size={28} color="#e9e9e9" />
    </ButtonText>
  </Button>
);
