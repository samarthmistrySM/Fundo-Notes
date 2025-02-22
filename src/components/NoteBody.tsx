import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const NoteBody = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.title} placeholder="Title" placeholderTextColor="#aaa"/>
            <TextInput
                placeholder="Note"
                placeholderTextColor="#aaa"
                style={styles.content}
                multiline
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
    },
    title: {
        fontSize: 22,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    content: {
        fontSize: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        color: '#000',
        flex: 1,
        textAlignVertical: 'top',
    },
});

export default NoteBody;
