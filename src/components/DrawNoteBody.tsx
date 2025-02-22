import React, {FC, useRef} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {SketchCanvas} from '@sourcetoad/react-native-sketch-canvas';

const DrawNoteBody: FC = () => {
  const canvasRef = useRef<SketchCanvas>(null);

  return (
    <View style={styles.container}>
      <SketchCanvas
        ref={canvasRef}
        style={styles.canvas}
        strokeColor={'#000'}
        strokeWidth={3}
      />
      <View style={styles.controls}>
        <Button
          title="Clear"
          onPress={(): void => canvasRef.current?.clear()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  canvas: {
    width: '100%',
    flex: 1,
    // height: 400,
  },
  controls: {
    marginTop: 10,
  },
});

export default DrawNoteBody;
