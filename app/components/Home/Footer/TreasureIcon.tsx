import { Box } from "@mui/material";
import React from "react";

export const TreasureIcon = () => {
  return (
    <Box
      sx={{ padding: "14px", backgroundColor: "#ffffff", borderRadius: "32px" }}
    >
      <Box
        component="img"
        src={"/Material/Icon/Treasure_Chest.svg"}
        alt={"Treasure Chest"}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </Box>
  );
};
