import { Box, Paper, styled, TextField, TextFieldProps } from "@mui/material";
import { motion } from "framer-motion";

const StyledTextField = styled(TextField)<TextFieldProps>(
  ({ theme, error }) => ({
    "& .MuiOutlinedInput-root": {
      overflow: "hidden",
      "&.Mui-focused fieldset": {
        borderColor: "#E26385",
      },
      color: "#929292",
    },

    "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
      borderColor: error && theme.palette.error.main,
    },
  })
);

const StyledDragHandle = styled(Box)(() => ({
  width: "40px",
  height: "6px",
  backgroundColor: "#C8C8C8",
  borderRadius: "4px",
  margin: "8px auto",
  cursor: "pointer",
}));

const StyledBottomSheetContainer = styled(motion(Paper))(() => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  borderTopLeftRadius: "12px",
  borderTopRightRadius: "12px",
  boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1)",
  zIndex: 10,
  overflow: "hidden",
  maxHeight: "90vh",
  overflowY: "auto",
}));

export { StyledBottomSheetContainer, StyledDragHandle, StyledTextField };
