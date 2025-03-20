"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { Box, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { motion, PanInfo, AnimatePresence } from "framer-motion";

const DragHandle = styled(Box)(({ theme }) => ({
  width: "40px",
  height: "6px",
  backgroundColor: "#C8C8C8",
  borderRadius: "4px",
  margin: "8px auto",
  cursor: "pointer",
}));

const BottomSheetContainer = styled(motion(Paper))(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  borderTopLeftRadius: "12px",
  borderTopRightRadius: "12px",
  boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1)",
  zIndex: 10,
  overflow: "hidden",
  maxHeight: "90vh",
  overflowY: "auto",
}));

type SheetState = "closed" | "half-open" | "full-open";

interface CustomizedBottomSheetProps {
  children?: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  initialHeight?: string;
}

const CustomizedBottomSheet = ({
  children,
  isOpen,
  setIsOpen,
  initialHeight = "50vh",
}: CustomizedBottomSheetProps) => {
  const [sheetState, setSheetState] = useState<SheetState>("closed");

  useEffect(() => {
    if (isOpen) {
      setSheetState("half-open");
    } else {
      setSheetState("closed");
    }
  }, [isOpen]);

  const getSheetHeight = () => {
    switch (sheetState) {
      case "full-open":
        return "90vh";
      case "half-open":
        return initialHeight;
      case "closed":
        return "0";
    }
  };

  const handleDrag = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.y < -20) {
      setSheetState("full-open");
    } else if (info.offset.y > 20 && sheetState === "half-open") {
      setIsOpen(false);
    } else if (info.offset.y > 20 && sheetState === "full-open") {
      setSheetState("half-open");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <BottomSheetContainer
          elevation={3}
          initial={{ y: "100%" }}
          animate={{
            y: sheetState === "closed" ? "100%" : 0,
            height: getSheetHeight(),
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 30,
            },
          }}
          exit={{
            y: "100%",
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 30,
            },
          }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragEnd={handleDrag}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "sticky",
              top: 0,
              zIndex: 10,
              backgroundColor: "#fff",
              paddingTop: 1,
              paddingBottom: 1,
            }}
          >
            <DragHandle />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              height: "calc(100% - 40px)",
              px: 6,
              py: 0,
            }}
          >
            {children}
          </Box>
        </BottomSheetContainer>
      )}
    </AnimatePresence>
  );
};

export default CustomizedBottomSheet;
