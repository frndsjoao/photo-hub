import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray_400};
  border-radius: 4px;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.MD}px;
  font-family: ${({ theme }) => theme.fontFamily.BOLD};
  color: ${({ theme }) => theme.colors.white};
`;
