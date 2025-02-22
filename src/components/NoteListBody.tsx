import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import ListItem from './ListItem';

const NoteBody = () => {
    const [listItems, setListItems] = useState([{ id: 1, text: '' }]);

    const addListItem = () => {
        setListItems([...listItems, { id: Date.now(), text: '' }]);
    };

    const updateListItem = (id:number, newText:string) => {
        setListItems(listItems.map(item =>
            item.id === id ? { ...item, text: newText } : item
        ));
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.title}
                placeholder="Title"
                placeholderTextColor="#aaa"
            />
            {listItems.map(item => (
                <ListItem
                    key={item.id}
                    value={item.text}
                    placeholder="Enter text"
                    onChangeText={(text: string): void => updateListItem(item.id, text)} // Now matches the type
                />
            ))}
            <TouchableOpacity
                onPress={addListItem}
                style={styles.addButton}
            >
                <Text style={styles.addButtonText}>+ List item</Text>
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
});

export default NoteBody;
