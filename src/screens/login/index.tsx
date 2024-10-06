import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import Button from '../../component/Button';
import Container from '../../component/Container';
import Input from '../../component/Input';
import { Content, Logo } from './styles';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <Container>
      <Content>
        <Logo>marimoreira.</Logo>

        <Input placeholder="Login" icon={{ name: 'user' }} />
        <Input placeholder="Senha" icon={{ name: 'lock' }} />

        <View style={{ marginTop: 20, width: '100%' }}>
          <Button label="Acessar" onPress={() => navigation.navigate('home')} />
        </View>
      </Content>
    </Container>
  );
}
