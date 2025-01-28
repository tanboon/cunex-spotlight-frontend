import { Box } from "@mui/material";
import React from "react";
import { ButtonFooter } from "./ButtonFooter";
import { TreasureIcon } from "./TreasureIcon";

export const HomeFooter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "max-content",
        marginBottom: "50px",
        marginX: "20px",
      }}
    >
      <Box alignSelf={"end"} marginBottom={"20px"}>
        <TreasureIcon />
      </Box>
      <Box>
        <ButtonFooter />
      </Box>
    </Box>
  );
};
