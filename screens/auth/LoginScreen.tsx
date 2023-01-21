import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import {Text, View} from '../../components/Themed';
import {RootStackScreenProps} from '../../types';
import Colors from '../../constants/Colors';

export default function LoginScreen({navigation}: RootStackScreenProps<'Login'>) {
  const onLogin = () => {
    navigation.replace('Root');
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Image source={require('../../assets/images/practical_test_logo.png')} style={styles.logo}/>
      </View>
      <TouchableOpacity onPress={onLogin} style={styles.link}>
        <Text style={styles.linkText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 30,
  },
  description: {
    fontSize: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 15,
    border: 'solid',
    borderRadius: 18,
    backgroundColor: Colors.brandColor.color,
  },
  linkText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoView: {
    alignItems: 'center',
  }
});
