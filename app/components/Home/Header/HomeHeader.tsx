"use client";

import { Box, Typography } from "@mui/material";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const HomeHeader = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: "768px",
        height: "5rem",
        zIndex: 1000,
        backgroundColor: "#EDEDED",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box paddingLeft={2}>
        <ChevronLeft color="#E16385" onClick={() => router.back()} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Typography fontWeight={500} fontSize={"26px"}>
          Cu spotlight
        </Typography>
      </Box>

      <Box
        component="img"
        src="/material/CUNEX.svg"
        alt="CUNEX Logo"
        sx={{
          width: "108px",
          height: "100%",
        }}
      />
    </Box>
  );
};

export default HomeHeader;
