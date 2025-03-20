import {
  Box,
  Button,
  ButtonProps,
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

type QuestType = "walk" | "check-in" | "review";

type QuestCardProps = {
  name: string;
  type: QuestType;
  progress: number;
  goal: number;
};

const iconMap = {
  walk: "/Material/Icon/Group 69.svg",
  "check-in": "/Material/Icon/Group 73.svg",
  review: "/Material/Icon/Group 70.svg",
};

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#FFFFFF",
  backgroundColor: "#E26385",
  "&:hover": {
    backgroundColor: "#E26385",
  },
  borderRadius: "8px",
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: "6px",
  borderRadius: "28px",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#B5B5B5",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: "28px",
    backgroundColor: "#E26385",
  },
}));

const QuestCard = ({ name, type, progress, goal }: QuestCardProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "60px",
        gap: "15px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#D9D9D9",
          borderRadius: "8px",
          width: "60px",
          height: "60px",
        }}
      >
        <img src={iconMap[type]} alt="Group 69 Icon" width={36} height={36} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          flex: "1",
          paddingRight: "10px",
        }}
      >
        <Typography sx={{ fontSize: "16px" }}>{name}</Typography>
        <Typography
          sx={{ fontSize: "16px", fontWeight: 600, lineHeight: "15px" }}
        >
          {progress}/{goal}
        </Typography>
        <BorderLinearProgress
          variant="determinate"
          value={(progress / goal) * 100}
          sx={{ width: "100%", marginTop: "auto" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <ColorButton
          sx={{
            fontSize: "16px",
            fontWeight: 300,
            "& .MuiButton-root": {
              borderRadius: "8px",
            },
            height: "40px",
          }}
        >
          รับรางวัล
        </ColorButton>
      </Box>
    </Box>
  );
};

export default QuestCard;
