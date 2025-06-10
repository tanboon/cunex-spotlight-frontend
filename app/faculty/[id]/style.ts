import { styled, Button, ButtonProps } from "@mui/material";

const StyledColorButton = styled(Button)<ButtonProps>(() => ({
  color: "#FFFFFF",
  backgroundColor: "#E26385",
  "&:hover": {
    backgroundColor: "#E26385",
  },
}));

const StyledVisuallyHiddenInput = styled("input")({
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

export { StyledColorButton, StyledVisuallyHiddenInput };
