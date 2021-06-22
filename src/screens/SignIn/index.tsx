import React from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';

import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png';

export function SignIn() {
  return (
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
          activeOpacity={0.7}
        />
      </View>
    </View>
  );
};