import * as React from 'react';
import { Box, Modal, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius:5,
  p: 4,
};

export function BasicModal({
  children,
  showModal,
  setShowModal,
  popupText,
  onClick,
}) {
  const handleClose = () => setShowModal(false);
  return (
    <div>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box style={{ display: 'flex', flexDirection: 'column' }} sx={style}>
          {children}
          <p style={{ color: 'green', fontSize: '1.5em', textAlign: 'center' }}>
            {popupText}
          </p>
          <Button onClick={onClick} variant="contained" color="success">
            OK
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export function DeleteModal({
  children,
  showModalDelete,
  setShowModalDelete,
  popupText,
  onClick,
}) {
  const handleClose = () => setShowModalDelete(false);
  return (
    <div>
      <Modal
        open={showModalDelete}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box style={{ display: 'flex', flexDirection: 'column' }} sx={style}>
          {children}
          <p style={{ color: 'green', fontSize: '1.5em', textAlign: 'center' }}>
            {popupText}
          </p>
          <Button onClick={onClick} variant="contained" color="success">
            OK
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
