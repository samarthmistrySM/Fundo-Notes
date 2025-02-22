import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AddModal from './AddModal.tsx';
import ColorModal from './ColorModal.tsx';
import MoreOptionModal from "./MoreOptions.tsx";

const NoteFooter = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [isColorModalOpen, setIsColorModalOpen] = useState<boolean>(false);
  const [isMoreOptionModalOpen, setIsMoreOptionModalOpen] = useState<boolean>(false);

  const handleModalClose = () => {
    setIsAddModalOpen(false);
    setIsColorModalOpen(false);
    setIsMoreOptionModalOpen(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => setIsAddModalOpen(true)}>
          <Image
            style={styles.icon}
            source={require('../assets/plus.app.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsColorModalOpen(true)}>
          <Image
            style={styles.icon}
            source={require('../assets/paintpalette.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={require('../assets/arrow.uturn.backward.png')}
        />
        <Image
          style={styles.icon}
          source={require('../assets/arrow.uturn.forward.png')}
        />
      </View>
      <View style={[styles.iconContainer]}>
        <TouchableOpacity onPress={() => setIsMoreOptionModalOpen(true)}>
            <Image
                style={[styles.icon, {transform: [{rotate: '90deg'}]}]}
                source={require('../assets/ellipsis.png')}
            />
        </TouchableOpacity>
      </View>
      <AddModal
        isModalOpen={isAddModalOpen}
        handleModalClose={handleModalClose}
      />
      <ColorModal
        isModalOpen={isColorModalOpen}
        handleModalClose={handleModalClose}
      />
        <MoreOptionModal
            isModalOpen={isMoreOptionModalOpen}
            handleModalClose={handleModalClose}
            />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 20,
    height: 20,
    objectFit: 'contain',
    tintColor: '#333',
    marginHorizontal: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default NoteFooter;
