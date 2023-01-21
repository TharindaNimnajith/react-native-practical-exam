import {StyleSheet} from 'react-native';

import {Text, View} from '../../components/Themed';
import {RootTabScreenProps} from "../../types";

// noinspection JSUnusedLocalSymbols
export default function TabTwoScreen({navigation}: RootTabScreenProps<'TabTwo'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore</Text>
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
