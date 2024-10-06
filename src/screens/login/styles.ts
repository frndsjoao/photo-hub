import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 24px;
`;

export const Logo = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.LG}px;
  font-family: ${({ theme }) => theme.fontFamily.BOLD};
  color: ${({ theme }) => theme.colors.gray_700};

  margin-bottom: 20px;
`;
