import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../theme';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 44px;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.gray_200};
`;

export const ContainerInput = styled(TextInput).attrs({
  placeholderTextColor: theme.colors.gray_300,
})`
  flex: 1;
  height: 42px;
  padding: 0 12px;
  font-size: ${({ theme }) => theme.fontSize.MD}px;
  font-family: ${({ theme }) => theme.fontFamily.REGULAR};
  color: ${({ theme }) => theme.colors.gray_800};
`;
