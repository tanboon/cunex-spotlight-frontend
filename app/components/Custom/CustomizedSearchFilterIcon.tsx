import { Box, Typography } from "@mui/material";
import React from "react";

interface CustomizeSearchFilterIconProps {
  text: string;
  iconPath: string;
}

export const CustomizeSearchFilterIcon = ({
  text,
  iconPath,
}: CustomizeSearchFilterIconProps) => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        padding: "8px 12px",
        whiteSpace: "nowrap",
        backgroundColor: "#FFFFFF",
        border: "1px solid #DADADA",
        borderRadius: "32px",
        gap: "4px",
        width: "max-content",
        height: "40px",
      }}
    >
      <Box
        component="img"
        src={iconPath}
        alt={text}
        sx={{
          width: "20px",
          height: "20px",
          objectFit: "contain",
        }}
      />
      <Typography fontWeight={300} fontSize={"13px"}>
        {text}
      </Typography>
    </Box>
  );
};
