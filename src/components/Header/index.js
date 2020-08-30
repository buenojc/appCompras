import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, MenuWrapper, AppTitle, HeaderBar, Title } from './style';

export default function Header() {
  return (
    <Container>
      <MenuWrapper>
        <Icon name='settings' size={30} color='white' />
        <AppTitle>Sacolão</AppTitle>
      </MenuWrapper>
      <HeaderBar>
        <Title>Ultimas Compras</Title>
      </HeaderBar>
    </Container>
  );
}
