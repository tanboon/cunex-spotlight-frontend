import Button, { ButtonProps } from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

type ExtendedButtonProps = ButtonProps & {
  testId?: string;
  addStartIcon?: boolean;
};

function CustomizedButton({
  sx,
  variant,
  title,
  onClick,
  startIcon,
  type,
  fullWidth,
  color,
  size,
  disabled,
  id,
  testId,
  addStartIcon,
}: ExtendedButtonProps) {
  return (
    <Button
      id={id}
      data-test-id={testId}
      sx={sx}
      type={type || "button"}
      size={size || "small"}
      variant={variant}
      onClick={onClick}
      startIcon={addStartIcon ? <AddIcon /> : startIcon}
      fullWidth={fullWidth}
      color={color}
      disabled={disabled}
      formNoValidate
    >
      {title}
    </Button>
  );
}

export default CustomizedButton;
