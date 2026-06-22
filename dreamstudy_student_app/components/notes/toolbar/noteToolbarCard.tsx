import { Card } from '@/components/card';
import { useSkiaDrawContext } from '@/hooks/skia/useSkiaDrawContext';
import { useNoteUIContext } from '@/hooks/useNoteUIContext';
import { cardStyles } from '@/utils/appStyles';
import { CanvasRef } from '@shopify/react-native-skia';
import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ColorPickerButton } from './colorPickerToolbarButton';
import { DeleteButton } from './deleteToolbarButton';
import { DrawButton } from './drawToolbarButton';
import { SaveNoteButton } from './saveNoteToolbarButton';
import { SelectionButton } from './selectionToolbarButton';

export interface NoteToolbarCardProps extends PropsWithChildren {
  canvasRefObject: React.RefObject<CanvasRef | null>;
  canvasStyle: StyleProp<ViewStyle>;
}

export function NoteToolbarCard({
  canvasRefObject,
  canvasStyle,
  children
}: NoteToolbarCardProps) {
  const noteUIContext = useNoteUIContext();
  const skiaDrawContext = useSkiaDrawContext();

  // Obtain the current value from the RefObject of CanvasRef
  const canvasRef = canvasRefObject.current;

  const [activeSkTool, setActiveSkTool] = useState(
    noteUIContext.state.noteMenu
  );
  const [skColor, setSkColor] = useState(skiaDrawContext.state.skColor);
  const [skBackgroundColor, setSkBackgroundColor] = useState(
    skiaDrawContext.state.skBackgroundColor
  );
  const [skSize, setSkSize] = useState(skiaDrawContext.state.skSize);
  const [containsSkiaObject, setContainsSkiaObjects] = useState(
    skiaDrawContext.state.skObjects.length > 0
  );

  useEffect(() => {
    const unsubscribeNoteUI = noteUIContext.addNoteListener(state => {
      setActiveSkTool(state.noteMenu);
    });
    const unsubscribeSkiaDraw = skiaDrawContext.addDrawListener(state => {
      setSkColor(state.skColor);
      setSkBackgroundColor(state.skBackgroundColor);
      setContainsSkiaObjects(state.skObjects.length > 0);
      setSkSize(state.skSize);
    });

    return () => {
      unsubscribeSkiaDraw();
      unsubscribeNoteUI();
    };
  }, [skiaDrawContext, noteUIContext]);

  const handleDrawingToolPressed = useCallback(() => {
    noteUIContext.commands.toggleNoteMenu('drawing');
  }, [noteUIContext.commands]);

  const handleDeleteToolPressed = useCallback(() => {
    if (skiaDrawContext.state.selectedSkObjects.length === 0) {
      noteUIContext.commands.toggleNoteModal(true);
    } else {
      skiaDrawContext.commands.deleteSelectedSkiaObjects(); // Delete selected skia objects if they are available
    }
  }, [noteUIContext.commands, skiaDrawContext.commands]);

  const handleColorsToolPressed = useCallback(() => {
    noteUIContext.commands.toggleNoteMenu('colors');
  }, [noteUIContext.commands]);

  const handleSelectionToolPressed = useCallback(() => {
    noteUIContext.commands.toggleNoteMenu('selection');
  }, [noteUIContext.commands]);

  const saveSkiaNote = async () => {
    // Clean any unecessary skia objects before saving as an snapshot
    await skiaDrawContext.commands.cleanUnecessarySkiaObjects();
    if (canvasRef !== null) {
      const skiaSnapshot = canvasRef.makeImageSnapshot;
      if (skiaSnapshot) {
        const skiaImage = skiaSnapshot();
        // Set the state in the noteMenu to saved
        noteUIContext.state.noteMenu = 'saved';
        const skiaEncodedImage = skiaImage.encodeToBase64();
      }
    } else {
      // const skiaErrorSnapshot = useImage();
    }
  };

  return (
    <Card style={cardStyles.drawingToolbar}>
      <DrawButton
        selected={activeSkTool === 'drawing'}
        accessibilityHint="Draw Toolbar Button"
        onPress={handleDrawingToolPressed}
      />
      <ColorPickerButton
        backgroundColour={skBackgroundColor}
        color={skColor}
        size={skSize}
        selected={activeSkTool === 'colors'}
        accessibilityHint="Color Picker Toolbar Button"
        onColorPress={handleColorsToolPressed}
      />
      <DeleteButton
        accessibilityHint="Delete Toolbar Button"
        onPress={handleDeleteToolPressed}
      />
      <SelectionButton
        selected={activeSkTool === 'selection'}
        accessibilityHint="Selection Toolbar Button"
        onPress={handleSelectionToolPressed}
      />
      <SaveNoteButton
        accessibilityHint="Delete Toolbar Button"
        onPress={handleDrawingToolPressed}
      />
    </Card>
  );
}
