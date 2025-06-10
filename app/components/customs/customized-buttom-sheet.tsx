"use client";

import { Stack } from "@mui/material";
import { PanInfo } from "framer-motion";
import { ReactNode, useState } from "react";
import { StyledBottomSheetContainer, StyledDragHandle } from "./style";

type SheetState = "closed" | "half-open" | "full-open";

type CustomizedBottomSheetProps = {
  children?: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  initialHeight?: string;
};

function CustomizedBottomSheet({
  children,
  isOpen,
  setIsOpen,
  initialHeight = "50vh",
}: CustomizedBottomSheetProps) {
  const [sheetState, setSheetState] = useState<SheetState>(
    isOpen ? "half-open" : "closed"
  );

  const sheetHeight = getSheetHeight({ sheetState, initialHeight });

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
    <>
      {isOpen && (
        <StyledBottomSheetContainer
          elevation={3}
          initial={{ y: "100%" }}
          animate={{
            y: sheetState === "closed" ? "100%" : 0,
            height: sheetHeight,
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
          <Stack
            sx={{
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
            <StyledDragHandle />
          </Stack>
          <Stack
            sx={{
              flexDirection: "column",
              justifyContent: "flex-start",
              height: "calc(100% - 40px)",
              px: 6,
              py: 0,
            }}
          >
            {children}
          </Stack>
        </StyledBottomSheetContainer>
      )}
    </>
  );
}

export default CustomizedBottomSheet;

function getSheetHeight({
  sheetState,
  initialHeight,
}: {
  sheetState: SheetState;
  initialHeight: string;
}) {
  switch (sheetState) {
    case "full-open":
      return "90vh";
    case "half-open":
      return initialHeight;
    case "closed":
      return "0";
  }
}
