import React, {FC, useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

interface Props {
  onChangeText: (text: string) => void;
  value: string;
  placeholder: string;
}

const ListItem: FC<Props> = ({onChangeText, value, placeholder}) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = (): void => {
    setChecked(!checked);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggle} style={styles.checkbox}>
        {checked && <View style={styles.checked} />}
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        value={value}
        onChangeText={onChangeText}
        multiline
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 4,
    marginRight: 12,
    marginTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    width: 12,
    height: 12,
    backgroundColor: '#888',
    borderRadius: 2,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#000',
    paddingTop: 0,
    textAlignVertical: 'top',
  },
});

export default ListItem;
