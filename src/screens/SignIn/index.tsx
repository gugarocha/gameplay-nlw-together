import React from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';

import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png';

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home')
  };

  return (
    <Background>

      <View style={styles.container}>
        <Image
          style={styles.image}
          source={IllustrationImg}
          resizeMode='stretch'
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}
            e organize {'\n'}
            suas jogatinas
          </Text>

          <Text style={styles.subtitle} >
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>

          <ButtonIcon
            title='Entrar com Discord'
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  );
};