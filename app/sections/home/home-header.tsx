"use client";

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { StyledBoxHeader } from "./styles";

function HomeHeader() {
  const router = useRouter();
  const theme = useTheme();

  const pinkColor = theme.palette.primary.main;

  return (
    <StyledBoxHeader>
      <Box paddingLeft={2}>
        <IconButton onClick={() => router.back()}>
          <ChevronLeft color={pinkColor} />
        </IconButton>
      </Box>

      <Box
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Typography
          fontWeight={500}
          fontSize={"26px"}
          className="font-chula-longkorn-bold"
        >
          Cu spotlight
        </Typography>
      </Box>

      <Box
        component="img"
        src="/material/CUNEX.svg"
        alt="CUNEX Logo"
        sx={{
          width: "108px",
          height: 1,
        }}
      />
    </StyledBoxHeader>
  );
}

export default HomeHeader;
