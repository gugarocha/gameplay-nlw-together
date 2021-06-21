import React from 'react';
import {
  View,
  Image,
  Text,
  StatusBar
} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';

import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png';

export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <Image
        style={styles.image}
        source={IllustrationImg}
        resizeMode='stretch'
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {'\n'}
          suas jogatinas {'\n'}
          facilmente
        </Text>

        <Text style={styles.subtitle} >
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>

        <ButtonIcon
          title='Entrar com Discord'
          activeOpacity={0.7}
        />
      </View>
    </View>
  );
};