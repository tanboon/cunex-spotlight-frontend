"use client";
import {
  Box,
  Button,
  ButtonProps,
  LinearProgress,
  linearProgressClasses,
  styled,
} from "@mui/material";

const StyledBoxView = styled(Box)(() => ({
  position: "absolute",
  top: 80,
  left: 0,
  width: "100%",
  height: "calc(100% - 80px)",
  zIndex: 2,
  pointerEvents: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const StyledBoxSearchFilter = styled(Box)(() => ({
  width: "100%",
  overflow: "auto",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  pointerEvents: "auto",
}));

const StyledBoxReviewBottomSheet = styled(Box)(() => ({
  color: "#262626",
  fontSize: 12,
  padding: "2px 8px",
  backgroundColor: "#EDEDED",
  borderRadius: 8,
  ":hover": {
    backgroundColor: "#CBCBCB",
  },
  transition: "background-color 0.3s",
}));
const StyledBoxHeader = styled(Box)(() => ({
  position: "fixed",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  width: "100%",
  maxWidth: 768,
  height: 80,
  zIndex: 1000,
  backgroundColor: "#EDEDED",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const StyledBoxFooter = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "max-content",
  marginBottom: 50,
  marginLeft: 20,
  marginRight: 20,
  pointerEvents: "auto",
}));

const StyledButtonQuest = styled(Button)<ButtonProps>(() => ({
  color: "#FFFFFF",
  backgroundColor: "#E26385",
  "&:hover": {
    backgroundColor: "#E26385",
  },
  borderRadius: 8,
}));

const StyledBorderLinearProgress = styled(LinearProgress)(() => ({
  height: 6,
  borderRadius: 28,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#B5B5B5",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 28,
    backgroundColor: "#E26385",
  },
}));

const StyledButtonReview = styled(Button)<ButtonProps>(() => ({
  color: "#FFFFFF",
  backgroundColor: "#E26385",
  "&:hover": {
    backgroundColor: "#E26385",
  },
}));

export {
  StyledBoxView,
  StyledBoxSearchFilter,
  StyledBoxReviewBottomSheet,
  StyledBoxHeader,
  StyledBoxFooter,
  StyledButtonQuest,
  StyledBorderLinearProgress,
  StyledButtonReview,
};
