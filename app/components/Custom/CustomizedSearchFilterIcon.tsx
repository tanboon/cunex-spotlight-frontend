import { Box, Typography } from "@mui/material";
import React from "react";

interface CustomizeSearchFilterIconProps {
  text: string;
  iconPath: string;
  onClick?: () => void;
  isSelected?: boolean;
}

export const CustomizeSearchFilterIcon = ({
  text,
  iconPath,
  onClick,
  isSelected,
}: CustomizeSearchFilterIconProps) => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        padding: "8px 12px",
        whiteSpace: "nowrap",
        backgroundColor: "#FFFFFF",
        border: isSelected ? "1px solid #000000" : "1px solid #DADADA",
        borderRadius: "32px",
        gap: "4px",
        width: "max-content",
        height: "40px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Box
        component="img"
        src={iconPath}
        alt={text}
        sx={{
          width: "20px",
          height: "20px",
          objectFit: "contain",
          userSelect: "none",
          pointerEvents: "none",
        }}
      />
      <Typography
        fontWeight={300}
        fontSize={"13px"}
        sx={{
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
