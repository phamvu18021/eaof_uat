import {
  AspectRatio,
  Modal,
  ModalContent,
  ModalOverlay
} from "@chakra-ui/react";

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalComponent = ({ isOpen, onClose }: ModalComponentProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="900px" h={"506px"} bg={"#ffffff0"}>
        <AspectRatio maxW="900px" h={"506px"} ratio={1}>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/FjWX-2wTP0k?si=U0cnZDkIanM1Xlh-"
            allowFullScreen
          />
        </AspectRatio>
      </ModalContent>
    </Modal>
  );
};
