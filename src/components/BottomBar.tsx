import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackParamList} from '../navigation/types.ts';
import {NavigationProp} from '@react-navigation/native';

const BottomBar = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate( 'NewNote', { type:'list'})}>
        <Image
          source={require('../assets/checkmark.square.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate( 'NewNote', { type:'draw'})}>
        <Image
          source={require('../assets/paintbrush.pointed.fill.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Checkmark tapped!')}>
        <Image
          source={require('../assets/microphone.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Checkmark tapped!')}>
        <Image
          source={require('../assets/photo.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View style={styles.floatingButton}>
        <TouchableOpacity
          onPress={() => navigation.navigate( 'NewNote',  {type:'note'})}>
          <Image
            source={require('../assets/sheets-blank-googlecolors-removebg-preview.png')}
            style={styles.plusIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    height: 80,
    marginBottom: -35,
    paddingHorizontal: 16,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -1},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5,
  },
  image: {
    width: 20,
    height: 20,
    tintColor: '#000',
    marginHorizontal: 15,
  },
  floatingButton: {
    position: 'absolute',
    right: 30,
    top: -30,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#f4f4f4',
    borderWidth: 5,
  },
  plusIcon: {
    width: 100,
    height: 100,
    objectFit: 'contain',
  },
});

export default BottomBar;
