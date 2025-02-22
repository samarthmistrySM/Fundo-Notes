import React, {FC} from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import NoteHeader from '../components/NoteHeader';
import NoteFooter from '../components/NoteFooter';
import NoteBody from '../components/NoteBody';
import NoteListBody from '../components/NoteListBody';
import DrawNoteBody from '../components/DrawNoteBody';
import {StackParamList} from '../navigation/types.ts';
import {StackScreenProps} from '@react-navigation/stack';

type Props = StackScreenProps<StackParamList, 'NewNote'>;

const NewNote: FC<Props> = ({route}) => {
  const {type} = route.params;

  return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <NoteHeader />
          {type !== 'draw' ? (
              <ScrollView style={styles.scrollContainer}>
                {type === 'note' ? <NoteBody /> : <NoteListBody />}
              </ScrollView>
          ) : (
              <DrawNoteBody />
          )}
          <NoteFooter />
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  scrollContainer:{
    flex: 1,
  },
});

export default NewNote;
