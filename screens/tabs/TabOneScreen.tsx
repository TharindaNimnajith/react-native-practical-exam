import React, {useState} from 'react';
import {Image, Modal, Pressable, StyleSheet} from 'react-native';

import {Text, View} from '../../components/Themed';
import {RootTabScreenProps} from '../../types';

export default function TabOneScreen({navigation}: RootTabScreenProps<'TabOne'>) {
  const [modalVisible, setModalVisible] = useState(false);

  const onModel = () => {
    setModalVisible(!modalVisible);
  }

  const onLogout = () => {
    navigation.replace('Login');
  }

  return (
    <View style={styles.container}>
      <Modal animationType='slide' transparent={true} visible={modalVisible} onRequestClose={onModel}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeading}>LOGGING OUT</Text>
            <Text style={styles.modalText}>Are you sure you want to log out?</Text>
            <Pressable style={styles.button} onPress={onLogout}>
              <Text style={styles.textStyle}>LOG OUT</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.row}>
        <Text style={styles.title}>Good Afternoon</Text>
        <Pressable onPress={onModel} style={styles.profile}>
          <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'}} style={styles.img}/>
        </Pressable>
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
    fontSize: 32,
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
    width: 50,
    height: 50,
    marginLeft: 25,
    borderRadius: 25,
  },
  img: {
    width: 50,
    height: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    opacity: 0.9,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'black',
    textAlign: 'center',
    border: 'solid',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
  },
  modalHeading: {
    marginBottom: 18,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  modalText: {
    marginBottom: 16,
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
  },
});
