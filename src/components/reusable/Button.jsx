import { IconButton, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)({
  fontSize: "1.7rem",
  padding: "10px 12px",
  width: "100%",
  whiteSpace: "nowrap",
});

const MUIButton = ({ onClick, text, disabled, error }) => {
  return (
    <CustomButton
      size="large"
      variant="contained"
      onClick={onClick}
      disabled={disabled && true}
      color={error && "error"}
    >
      {text}
    </CustomButton>
  );
};

export default MUIButton;
