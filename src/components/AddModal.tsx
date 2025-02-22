import React, {FC} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

interface Props {
  isModalOpen: boolean;
  handleModalClose: () => void;
}

const AddModal:FC<Props> = ({isModalOpen, handleModalClose}) => {
  return (
    <Modal
      visible={isModalOpen}
      animationType="slide"
      transparent={true}
      onRequestClose={handleModalClose}>
      <TouchableOpacity
        style={styles.modalContainer}
        activeOpacity={1}
        onPress={handleModalClose} // Close when tapping outside
      >
        <View
          style={styles.modalContent}
          onStartShouldSetResponder={() => true}>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('../assets/camera.png')}
              style={styles.icon}
            />
            <Text style={styles.text}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('../assets/photo.png')}
              style={styles.icon}
            />
            <Text style={styles.text}>Choose image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('../assets/paintbrush.pointed.fill.png')}
              style={styles.icon}
            />
            <Text style={styles.text}>Drawing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('../assets/microphone.png')}
              style={styles.icon}
            />
            <Text style={styles.text}>Recording</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    maxHeight: '90%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -1},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
      marginVertical: 10,
  },
  icon: {
    width: 25,
    height: 25,
    objectFit: 'contain',
    marginHorizontal: 10,
      tintColor: '#8a8a8a',
  },
    text:{
      color:'#8a8a8a',
        marginHorizontal:10,
        fontSize: 16,
    }
});

export default AddModal;
