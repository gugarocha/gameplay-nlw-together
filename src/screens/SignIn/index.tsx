import React from 'react';
import {
  Alert,
  View,
  Image,
  Text,
  ActivityIndicator
} from 'react-native';

import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';

import { useAuth } from '../../hooks/auth';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import IllustrationImg from '../../assets/illustration.png';

export function SignIn() {
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    };
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

          {
            loading
              ? <ActivityIndicator color={theme.colors.primary} />
              : <ButtonIcon
                title='Entrar com Discord'
                onPress={handleSignIn}
              />
          }
        </View>
      </View>
    </Background>
  );
};