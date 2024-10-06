import Icon from '@expo/vector-icons/Feather';
import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Container, ContainerInput } from './styles';

interface InputProps extends TextInputProps {
  icon?: { name: keyof typeof Icon.glyphMap; color?: string };
}

export default function Input({ icon, ...props }: InputProps) {
  const { colors } = useTheme();

  return (
    <Container>
      {icon && (
        <Icon
          name={icon.name}
          size={22}
          color={icon.color || colors.gray_500}
        />
      )}
      <ContainerInput {...props} />
    </Container>
  );
}
