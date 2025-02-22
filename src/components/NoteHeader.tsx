import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const NoteHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          source={require('../assets/chevron.backward.png')}
        />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={require('../assets/pin.png')} />
        <Image style={styles.icon} source={require('../assets/bell.png')} />
        <Image
          style={styles.icon}
          source={require('../assets/archivebox.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    objectFit: 'contain',
    tintColor: '#333',
    marginRight: 25,
  },
});

export default NoteHeader;
