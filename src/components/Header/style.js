import styled from 'styled-components';
import Constants from 'expo-constants';
import { Colors } from '../GlobalStyles';

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  margin-bottom: 30px;
`;

export const MenuWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
  align-items: center;
`;

export const AppTitle = styled.Text`
  color: ${Colors.secundary};
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const HeaderBar = styled.View`
  width: 100%;
  background-color: ${Colors.secundary};
  align-items: center;
  padding: 15px 0;
`;

export const Title = styled.Text`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${Colors.primary};
`;
