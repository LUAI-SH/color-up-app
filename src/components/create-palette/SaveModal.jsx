import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { IconButton, Button } from "@mui/material";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SaveModal = (props) => {
  const { input, setInput, open, onClose, handleSave } = props;
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={handleSave}
          disabled={input === "" ? true : false}
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default SaveModal;
