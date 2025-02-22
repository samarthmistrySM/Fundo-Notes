import React, {FC} from 'react';
import {
    View,
    Modal,
    StyleSheet,
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native';

interface Props {
    isModalOpen: boolean;
    handleModalClose: () => void;
}

const ColorModal:FC<Props> = ({isModalOpen, handleModalClose}) => {
    return (
        <Modal
            visible={isModalOpen}
            animationType="slide"
            transparent={true}
            onRequestClose={handleModalClose}>
            <TouchableOpacity
                style={styles.modalContainer}
                activeOpacity={1}
                onPress={handleModalClose}
            >
                <View
                    style={styles.modalContent}
                    onStartShouldSetResponder={() => true}>
                    <View style={styles.Container}>
                        <Text>Colour</Text>
                        <ScrollView style={styles.colors} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={[styles.color,{backgroundColor: '#fff'}]}/>
                            <TouchableOpacity style={[styles.color,{backgroundColor: '#000'}]}/>
                            <TouchableOpacity style={[styles.color,{backgroundColor: 'red'}]}/>
                            <TouchableOpacity style={[styles.color,{backgroundColor: 'green'}]}/>
                            <TouchableOpacity style={[styles.color,{backgroundColor: 'blue'}]}/>
                            <TouchableOpacity style={[styles.color,{backgroundColor: 'yellow'}]}/>
                            <TouchableOpacity style={[styles.color,{backgroundColor: 'pink'}]}/>
                        </ScrollView>
                    </View>
                    <View style={styles.Container}>
                        <Text>Backgrounds</Text>
                        <ScrollView style={styles.colors} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={[styles.bgs,{backgroundColor: '#000'}]}/>
                            <TouchableOpacity style={[styles.bgs,{backgroundColor: 'red'}]}/>
                            <TouchableOpacity style={[styles.bgs,{backgroundColor: 'green'}]}/>
                            <TouchableOpacity style={[styles.bgs,{backgroundColor: 'blue'}]}/>
                            <TouchableOpacity style={[styles.bgs,{backgroundColor: 'yellow'}]}/>
                            <TouchableOpacity style={[styles.bgs,{backgroundColor: 'pink'}]}/>
                        </ScrollView>
                    </View>
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
    },
    Container:{

    },
    colors:{
      marginVertical:10,
    },
    color:{
        width:40,
        height:40,
        borderRadius: 50,
        marginHorizontal:10,
        borderWidth: 1,
        borderColor: '#939393',
    },
    bgs:{
        width:70,
        height:70,
        borderRadius: 50,
        marginHorizontal:10,
    },
});

export default ColorModal;
