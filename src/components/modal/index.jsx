import React from "react";
import { Modal, Button, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import "./modal.css"


const ModalComponent = ({ open, handleClose, title, component }) => {

  return (
    <Modal open={open} onClose={handleClose} className="modal-container">
      <div>

        <div div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
          <IconButton className="close-button" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>

        <div>{component}</div>
        {/* <AddUserForm handleClose={handleClose} /> */}
        {/* <Button onClick={handleClose} variant="contained" color="primary">
          Cerrar
        </Button> */}
        </div>

      </div>
    </Modal>
  );
};

export default ModalComponent;
