import { useNoteUIContext } from '@/hooks/react/useNoteUIContext';
import { useSkiaDrawContext } from '@/hooks/skia/useSkiaDrawContext';
import { buttonStyles, cardStyles } from '@/utils/appStyles';
import { CanvasProps } from '@shopify/react-native-skia';
import { useCallback, useEffect, useState } from 'react';
import { Card } from '../../card';
import { ColorPickerButton } from './colorPickerToolbarButton';
import { DeleteButton } from './deleteToolbarButton';
import { DrawButton } from './drawToolbarButton';
import { SaveNoteButton } from './saveNoteToolbarButton';
import { SelectionButton } from './selectionToolbarButton';

export function NoteToolbarCard({ ref, style }: CanvasProps) {
  const noteUIContext = useNoteUIContext();
  const skiaDrawContext = useSkiaDrawContext();

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

  return (
    <Card style={cardStyles.drawingToolbar}>
      <DrawButton
        style={buttonStyles.drawToolbarButton}
        accessibilityHint="Draw Toolbar Button"
        onPress={handleDrawingToolPressed}
      />
      <ColorPickerButton
        style={buttonStyles.colorPickerToolbarButton}
        accessibilityHint="Color Picker Toolbar Button"
        onPress={handleColorsToolPressed}
      />
      <DeleteButton
        style={buttonStyles.deleteToolbarButton}
        accessibilityHint="Delete Toolbar Button"
        onPress={handleDeleteToolPressed}
      />
      <SelectionButton
        style={buttonStyles.selectionToolbarButton}
        accessibilityHint="Selection Toolbar Button"
        onPress={handleSelectionToolPressed}
      />
      <SaveNoteButton
        style={buttonStyles.saveDrawingToolbarButton}
        accessibilityHint="Delete Toolbar Button"
        onPress={handleDrawingToolPressed}
      />
    </Card>
  );
}
