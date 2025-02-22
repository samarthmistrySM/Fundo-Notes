import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.headerContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
        <View style={styles.menuContainer}>
          <DrawerItemList {...props}>
            <Image
              source={require('../assets/pin.png')}
              style={styles.menuItem}
            />
            <Text>{props.title}</Text>
          </DrawerItemList>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    width: '100%',
  },
  logo: {
    objectFit: 'contain',
    height: 50,
    width: '100%',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuContainer: {
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuText: {
    fontSize: 16,
    marginLeft: 10,
  },
  sectionDivider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
