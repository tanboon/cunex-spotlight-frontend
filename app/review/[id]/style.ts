import { styled, Button, ButtonProps } from "@mui/material";

const StyledButtonReview = styled(Button)<ButtonProps>(({ theme }) => ({
  marginLeft: 10,
  marginRight: 10,
  marginBottom: 10,
  padding: "10px 0px",
  borderRadius: 20,
  fontSize: 18,
  fontWeight: 600,
  color: "#FFFFFF",
  backgroundColor: "#E26385",
  "&:hover": {
    backgroundColor: "#E26385",
  },
}));

const StyledInputReview = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export { StyledButtonReview, StyledInputReview };
