import styled from 'styled-components';
import Constants from 'expo-constants';
import { Colors } from '../GlobalStyles';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  align-items: center;
  margin-top: ${Constants.statusBarHeight};
  background-color: ${Colors.primary};
`;

export const Title = styled.Text`
  font-size: 40px;
  color: ${Colors.secundary};
`;
