import React, {useState, useEffect} from 'react';
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

interface Note {
  title: string;
  description: string;
}

const Home = () => {
  // Using an empty array to show the alert by default
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (title: string, description: string) => {
    setNotes([...notes, {title, description}]);
  };

  const clearNotes = () => {
    setNotes([]);
  };

  useEffect(() => {
    handleAddNote();
  }, []);

  const handleAddNote = (): void => {
    addNote('sam', 'this is sam');
    addNote('sam', 'this is sam1');
    addNote('sam', 'this is sam2');
    addNote('sam', 'this is sam3');
    addNote('sam', 'this is sam5');
    addNote('sam', 'this is sam7');
    addNote('sam', 'this is sam6');
    addNote('sam', 'this is sam6');
    addNote('sam', 'this is sam6');
    addNote('sam', 'this is sam6');
    addNote('sam', 'this is sam4');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <SearchHeader />
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
            <View style={styles.notesContainer}>
              {notes.map((note, index) => (
                <View key={index} style={styles.noteItem}>
                  <Text style={styles.noteTitle}>{note.title}</Text>
                  <Text>{note.description}</Text>
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
  },
});

export default Home;
