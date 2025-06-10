import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

type CustomizeSearchFilterIconProps = {
  text: string;
  iconPath?: string;
  onClick?: () => void;
  isSelected?: boolean;
};

function CustomizeSearchFilterIcon({
  text,
  iconPath,
  onClick,
  isSelected,
}: CustomizeSearchFilterIconProps) {
  const theme = useTheme();
  const pinkColor = theme.palette.primary.main;
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        padding: "8px 12px",
        whiteSpace: "nowrap",
        backgroundColor: !isSelected ? "#FFFFFF" : pinkColor,
        border: !isSelected ? "1px solid #DADADA" : `1px solid ${pinkColor}`,
        borderRadius: 32,
        gap: 0.5,
        width: "max-content",
        height: 40,
        cursor: "pointer",
        transition: "background-color 0.2s, border-color 0.2s",
      }}
      onClick={onClick}
    >
      {iconPath && (
        <Box
          component="img"
          src={iconPath}
          alt={text}
          sx={{
            width: 20,
            height: 20,
            objectFit: "contain",
            userSelect: "none",
            pointerEvents: "none",
            filter: isSelected ? "brightness(0) invert(1)" : "none",
          }}
        />
      )}

      <Typography
        fontWeight={400}
        fontSize={13}
        sx={{
          color: !isSelected
            ? theme.palette.common.black
            : theme.palette.common.white,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
export default CustomizeSearchFilterIcon;
