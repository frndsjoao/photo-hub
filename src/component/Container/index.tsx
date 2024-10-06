import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { ViewContainer } from './styles';

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ViewContainer>{children}</ViewContainer>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
