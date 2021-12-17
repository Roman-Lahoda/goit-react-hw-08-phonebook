import { Modal, Box } from "@mui/material";
import { StyledIconButton, StyledBox } from "./ModalWindow.style";

import CloseIcon from "@mui/icons-material/Close";

const ModalWindow = ({ modalOpen, modalClose, children, ...props }) => {
  return (
    <Modal open={modalOpen} onClose={modalClose}>
      <StyledBox>
        <StyledIconButton onClick={() => modalClose()}>
          <CloseIcon />
        </StyledIconButton>
        <Box>{children}</Box>
      </StyledBox>
    </Modal>
  );
};

export default ModalWindow;
