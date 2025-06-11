import { IconButton, SxProps, Theme } from "@mui/material";
import { X } from "lucide-react";

type TCancelIconProps = {
  sx?: SxProps<Theme>;
  onClick?: () => void;
};

function CancelIcon({ sx, onClick }: TCancelIconProps) {
  return (
    <IconButton
      sx={sx}
      onClick={onClick}
      onMouseDown={(e) => {
        e.preventDefault();
      }}
    >
      <X strokeWidth={1} />
    </IconButton>
  );
}

export default CancelIcon;
