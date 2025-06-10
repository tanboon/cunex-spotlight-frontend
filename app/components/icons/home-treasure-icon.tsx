import { Box } from "@mui/material";
import React from "react";

function HomeTreasureIcon() {
  return (
    <Box
      sx={{ padding: "14px", backgroundColor: "#ffffff", borderRadius: "32px" }}
    >
      <Box
        component="img"
        src={"/Material/Icon/Treasure_Chest.svg"}
        alt={"Treasure Chest"}
        sx={{
          width: 28,
          height: 28,
          objectFit: "contain",
          backgroundColor: (theme) => theme.palette.common.white,
        }}
      />
    </Box>
  );
}

export default HomeTreasureIcon;
