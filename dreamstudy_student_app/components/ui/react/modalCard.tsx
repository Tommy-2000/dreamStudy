import React, { PropsWithChildren, useState } from 'react';
import { Modal } from 'react-native';
import { Card } from './card';
import { TextCard } from './textCard';

type ModalProps = PropsWithChildren<{
  modalIsVisible: boolean;
  modalOnClose: () => void;
}>;

export default function ModalCard({
  modalIsVisible,
  modalOnClose,
  children
}: ModalProps) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>();

  return (
    <React.Fragment>
      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <TextCard>Select a picture</TextCard>
        <Card>{children}</Card>
      </Modal>
    </React.Fragment>
  );
}
