import React, {FC, useState} from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {DrawerParamList} from '../navigation/types.ts';

type NavigationProp = DrawerNavigationProp<DrawerParamList>;

const SearchHeader: FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [toggleGrid, setToggleGrid] = useState(false);

  const handleToggleGrid = () => {
    setToggleGrid(!toggleGrid);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          style={styles.icon}
          source={require('../assets/line.3.horizontal.png')}
        />
      </TouchableOpacity>

      <TextInput
        placeholder="Search your notes"
        placeholderTextColor="#555"
        style={styles.searchInput}
      />

      <View style={styles.headerRight}>
        <TouchableOpacity onPress={handleToggleGrid}>
          <Image
            source={
              toggleGrid
                ? require('../assets/rectangle.grid.1x2.png')
                : require('../assets/square.grid.2x2.png')
            }
            style={styles.icon}
          />
        </TouchableOpacity>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/103932039?v=4',
          }}
          style={styles.profileImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5,
  },
  icon: {
    width: 25,
    height: 25,
    objectFit: 'contain',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 15,
  },
});

export default SearchHeader;
