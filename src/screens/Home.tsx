import React, {useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import SearchHeader from '../components/SearchHeader.tsx';
import BottomBar from '../components/BottomBar.tsx';
import NoteContext from '../context/NoteContext';

const Home = () => {
  const [toggleGrid, setToggleGrid] = useState<boolean>(true);
  const {notes} = useContext(NoteContext);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <SearchHeader toggleGrid={toggleGrid} setToggleGrid={setToggleGrid} />
        <ScrollView
          style={styles.body}
          contentContainerStyle={[
            styles.scrollContent,
            notes.length > 0 && {justifyContent: 'flex-start'},
          ]}>
          {notes.length === 0 ? (
            <View style={styles.alertContainer}>
              <Image
                style={styles.bulbIcon}
                source={require('../assets/lightbulb.png')}
              />
              <Text style={styles.noteText}>
                Notes That you add appear here
              </Text>
            </View>
          ) : (
            <View
              style={[
                styles.notesContainer,
                toggleGrid && {
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                },
              ]}>
              {notes.map((note, index) => (
                <View
                  key={index}
                  style={[
                    styles.noteItem,
                    toggleGrid ? {width: '49%'} : {width: '100%'},
                  ]}>
                  <Text style={styles.noteTitle}>{note.title}</Text>
                  {note.type === 'note' && <Text>{note.description}</Text>}
                  {note.type === 'list' &&
                    note.items.map((item, i) => (
                      <View key={i} style={styles.itemContainer}>
                        <View style={styles.checkbox}>
                          {item.checked && <View style={styles.checked} />}
                        </View>
                        <Text>{item.text}</Text>
                      </View>
                    ))}
                </View>
              ))}
            </View>
          )}
        </ScrollView>
        <BottomBar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  body: {
    flex: 1,
    paddingVertical: 10,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  bulbIcon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    tintColor: '#333',
    marginBottom: 20,
  },
  noteText: {
    color: '#333',
    fontSize: 20,
  },
  notesContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  noteItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
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
  itemContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
});

export default Home;
