import {StyleSheet} from 'react-native';

import {Text, View} from '../components/Themed';
import {RootTabScreenProps} from "../types";

// noinspection JSUnusedLocalSymbols
export default function TabThreeScreen({navigation}: RootTabScreenProps<'TabThree'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Library</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
