import {StyleSheet, TouchableOpacity} from 'react-native';

import {Text, View} from '../../components/Themed';
import {RootStackScreenProps} from "../../types";

export default function LoginScreen({navigation}: RootStackScreenProps<'Login'>) {
  const onLogin = () => {
    navigation.replace('Root');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.description}>Login</Text>
      <TouchableOpacity onPress={onLogin} style={styles.link}>
        <Text style={styles.linkText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 30,
  },
  description: {
    fontSize: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
