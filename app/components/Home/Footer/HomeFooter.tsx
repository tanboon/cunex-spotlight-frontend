"use client";

import { Box } from "@mui/material";
import React, { useState } from "react";
import { ButtonFooter } from "./ButtonFooter";
import { TreasureIcon } from "./TreasureIcon";
import CustomizedBottomSheet from "../../Custom/CustomizedButtomSheet";
import QuestBottomSheet from "../../Quest/QuestBottomSheet";

export const HomeFooter = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <Box
        alignSelf={"end"}
        marginBottom={"20px"}
        onClick={() => setIsOpen(true)}
      >
        <TreasureIcon />
      </Box>
      <Box>
        <ButtonFooter />
      </Box>
      <QuestBottomSheet isOpen={isOpen} setIsOpen={setIsOpen} />
    </Box>
  );
};
