"use client";

import { Box, IconButton, useTheme } from "@mui/material";

import { useBoolean } from "@/app/hooks/use-boolean";
import { AnimatePresence } from "framer-motion";
import CustomizedBottomSheet from "../../components/customs/customized-buttom-sheet";
import QuestBottomSheet from "./home-quest-bottom-sheet";
import HomeButtonFooter from "./home-button-footer";
import HomeTreasureIcon from "../../components/icons/home-treasure-icon";
import { StyledBoxFooter } from "./styles";

function HomeFooter() {
  const isOpen = useBoolean();
  const theme = useTheme();

  return (
    <StyledBoxFooter>
      <Box sx={{ alignSelf: "end", marginBottom: 2.75 }}>
        <IconButton
          onClick={isOpen.onToggle}
          sx={{
            padding: "0px !important",
            "& .MuiTouchRipple-root": { color: theme.palette.primary.main },
          }}
        >
          <HomeTreasureIcon />
        </IconButton>
      </Box>
      <Box>
        <HomeButtonFooter />
      </Box>
      <AnimatePresence>
        <CustomizedBottomSheet
          key={String(isOpen.value)}
          isOpen={isOpen.value}
          setIsOpen={isOpen.setValue}
        >
          <QuestBottomSheet />
        </CustomizedBottomSheet>
      </AnimatePresence>
    </StyledBoxFooter>
  );
}

export default HomeFooter;
