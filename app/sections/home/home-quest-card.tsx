import { Stack, Typography } from "@mui/material";
import { StyledBorderLinearProgress, StyledButtonQuest } from "./styles";

type QuestType = "walk" | "check-in" | "review";

type QuestCardProps = {
  name: string;
  type: QuestType;
  progress: number;
  goal: number;
};

const ICON_MAP = {
  walk: "/Material/Icon/Group 69.svg",
  "check-in": "/Material/Icon/Group 73.svg",
  review: "/Material/Icon/Group 70.svg",
};

function HomeQuestCard({ name, type, progress, goal }: QuestCardProps) {
  return (
    <Stack
      direction={"row"}
      sx={{
        width: "100%",
        height: "60px",
      }}
      spacing={15 / 8}
    >
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#D9D9D9",
          borderRadius: "8px",
          width: "60px",
          height: "60px",
        }}
      >
        <img src={ICON_MAP[type]} alt="Group 69 Icon" width={36} height={36} />
      </Stack>
      <Stack
        sx={{
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
        <StyledBorderLinearProgress
          variant="determinate"
          value={(progress / goal) * 100}
          sx={{ width: "100%", marginTop: "auto" }}
        />
      </Stack>
      <Stack
        sx={{
          justifyContent: "center",
        }}
      >
        <StyledButtonQuest
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
        </StyledButtonQuest>
      </Stack>
    </Stack>
  );
}

export default HomeQuestCard;
