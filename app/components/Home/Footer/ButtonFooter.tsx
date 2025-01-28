import { Box, Typography } from "@mui/material";
import React from "react";

export const ButtonFooter = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          backgroundColor: "#E26385",
          padding: "10px",
          borderRadius: "32px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
            backgroundColor: "#ffffff",
            borderRadius: "32px",
          }}
        >
          <Typography fontSize={"16px"} fontWeight={300} color="#E26385">
            เช็คอิน
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
