import {Pressable, StyleSheet} from 'react-native';

import {Text, View} from '../../components/Themed';
import {RootTabScreenProps} from '../../types';
import * as React from "react";

export default function TabOneScreen({navigation}: RootTabScreenProps<'TabOne'>) {
  const onLogout = () => {
    navigation.replace('Login');
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Good Afternoon</Text>
        <Pressable onPress={onLogout} style={styles.profile}/>
      </View>

      <Text style={styles.description}>Recently Played</Text>
      <View>
        <Text style={styles.description}>Main Song</Text>
      </View>
      <View>
        <Text style={styles.description}>Song List</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
  },
  profile: {
    width: 55,
    height: 55,
    marginLeft: 25,
    borderRadius: 25,
    opacity: 0.5,
    backgroundColor: 'grey',
  },
});
