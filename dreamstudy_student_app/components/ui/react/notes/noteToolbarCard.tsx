import { useNoteUIContext } from '@/hooks/react/useNoteUIContext';
import { useSkiaDrawContext } from '@/hooks/skia/useSkiaDrawContext';
import { buttonStyles, cardStyles } from '@/utils/appStyles';
import { CanvasProps } from '@shopify/react-native-skia';
import { useEffect, useState } from 'react';
import { ColorPickerButton } from '../buttons/noteToolbar/colorPickerToolbarButton';
import { DeleteButton } from '../buttons/noteToolbar/deleteToolbarButton';
import { DrawButton } from '../buttons/noteToolbar/drawToolbarButton';
import { SelectionButton } from '../buttons/noteToolbar/selectionToolbarButton';
import { Card } from '../card';

export function NoteToolbarCard({ ref, style }: CanvasProps) {
  const noteUIContext = useNoteUIContext();
  const skiaDrawContext = useSkiaDrawContext();

  const [activeSkTool, setActiveSkTool] = useState(
    noteUIContext.noteUIState.noteUIMenu
  );
  const [skColor, setSkColor] = useState(skiaDrawContext.drawState.skColor);
  const [skBackgroundColor, setSkBackgroundColor] = useState(
    skiaDrawContext.drawState.skBackgroundColor
  );
  const [skSize, setSkSize] = useState(skiaDrawContext.drawState.skSize);
  const [containsSkiaObject, setContainsSkiaObjects] = useState(
    skiaDrawContext.drawState.skObjects.length > 0
  );

  useEffect(() => {
    const unsubscribeNoteUI = noteUIContext.addNoteUIListener(state => {
      setActiveSkTool(state.noteUIMenu);
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

  return (
    <Card style={cardStyles.drawingToolbar}>
      <DrawButton style={buttonStyles.drawToolbarButton} />
      <ColorPickerButton style={buttonStyles.drawToolbarButton} />
      <DeleteButton />
      <SelectionButton />
    </Card>
  );
}
