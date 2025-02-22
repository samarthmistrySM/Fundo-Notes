import React, { FC, useState } from 'react';
import { View, StyleSheet, TextInput, Alert, Button } from 'react-native';
import { Note } from '../types';

interface Props {
    addNote: (note: Note) => void;
}

const NoteBody: FC<Props> = ({ addNote }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleAddOrUpdateNote = () => {
        if (title.trim() === '' && description.trim() === '') {
            Alert.alert(
                'Empty Note',
                'Please enter a title or description to save the note.',
            );
            return;
        }

        const note: Note = {
            id: Date.now().toString(),
            title: title.trim(),
            description: description.trim(),
            type: 'note',
        };

        addNote(note);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.title}
                placeholder="Title"
                placeholderTextColor="#aaa"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.content}
                placeholder="Description"
                placeholderTextColor="#aaa"
                value={description}
                onChangeText={setDescription}
                multiline
            />
            <Button title="Save" onPress={handleAddOrUpdateNote} />
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
