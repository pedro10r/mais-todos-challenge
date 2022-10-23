import { View } from "react-native";
import Modal from "react-native-modal";

import { Container, Title, AreaButton, Button, TextButton } from "./styles";

interface ModalProps {
  onConfirm: () => void;
  onClose: () => void;
  title: string;
  closeText: string;
  confirmText: string;
}

export function ConfirmModal({ onConfirm, onClose, title, closeText, confirmText }: ModalProps) {
  return (
    <View>
      <Modal isVisible onBackdropPress={onClose} >
        <Container>
          <Title>{title}</Title>
          <AreaButton>
            <Button
              type='cancel'
              onPress={onClose}
            >
              <TextButton type='cancel'>{closeText}</TextButton>
            </Button>

            <Button
              type='confirm'
              onPress={onConfirm}
            >
              <TextButton type='confirm'>{confirmText}</TextButton>
            </Button>
          </AreaButton>
        </Container>
      </Modal>
    </View>
  );
}