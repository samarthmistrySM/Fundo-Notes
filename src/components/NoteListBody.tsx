import React, { useState, FC } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import ListItem from './ListItem';
import { Note } from "../types";

interface Props {
    addNote: (note: Note) => void;
}

interface ListItemType {
    id: number;
    text: string;
    checked: boolean;
}

const NoteBody: FC<Props> = ({ addNote }) => {
    const [title, setTitle] = useState('');
    const [listItems, setListItems] = useState<ListItemType[]>([
        { id: 1, text: '', checked: false },
    ]);

    const addListItem = () => {
        setListItems([...listItems, { id: Date.now(), text: '', checked: false }]);
    };

    const updateListItem = (id: number, newText: string) => {
        setListItems(
            listItems.map(item =>
                item.id === id ? { ...item, text: newText } : item
            )
        );
    };

    const toggleChecked = (id: number) => {
        setListItems(
            listItems.map(item =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    };

    const handleAddOrUpdateNote = () => {
        const note: Note = {
            id: Date.now().toString(),
            title: title.trim(),
            type: 'list',
            items: listItems.map(({id, text, checked }) => ({id, text, checked })),
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
        {listItems.map(item => (
          <ListItem
            key={item.id}
            value={item.text}
            placeholder="Enter text"
            onChangeText={(text: string): void => updateListItem(item.id, text)}
            checked={item.checked}
            onToggle={() => toggleChecked(item.id)}
          />
        ))}
        <TouchableOpacity onPress={addListItem} style={styles.addButton}>
          <Text style={styles.addButtonText}>+ List item</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleAddOrUpdateNote}
          style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Note</Text>
        </TouchableOpacity>
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
    addButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    addButtonText: {
        color: '#888',
        fontSize: 15,
    },
    saveButton: {
        marginTop: 20,
        backgroundColor: '#007bff',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 5,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default NoteBody;
