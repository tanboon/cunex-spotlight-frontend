import { mockQuests } from "@/app/constant/mock-quest-data";
import { Stack, Typography } from "@mui/material";
import QuestCard from "./home-quest-card";

function HomeQuestBottomSheet() {
  return (
    <Stack
      sx={{
        alignItems: "start",
      }}
      spacing={1.25}
    >
      <Typography sx={{ fontSize: "20px", fontWeight: 400 }}>ภารกิจ</Typography>
      <Stack
        sx={{
          alignItems: "start",
          width: "100%",
        }}
        spacing={3.725}
      >
        {mockQuests.map((quest, index) => (
          <QuestCard
            key={index}
            name={quest.name}
            type={quest.type}
            progress={quest.progress}
            goal={quest.goal}
          />
        ))}
      </Stack>
    </Stack>
  );
}

export default HomeQuestBottomSheet;
