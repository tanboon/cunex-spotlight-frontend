import React from "react";
import CustomizedBottomSheet from "../Custom/CustomizedButtomSheet";
import { Box, Typography } from "@mui/material";
import QuestCard from "./QuestCard";

type CustomizedBottomSheetProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

type QuestType = "walk" | "check-in" | "review";

const mockQuests: {
  name: string;
  type: QuestType;
  progress: number;
  goal: number;
}[] = [
  {
    name: "เดินครบ 100,000 ก้าว",
    type: "walk",
    progress: 1323,
    goal: 100000,
  },
  {
    name: "เช็คอินรอบจุฬา",
    type: "check-in",
    progress: 1,
    goal: 20,
  },
  {
    name: "รีวิวร้านอาหาร",
    type: "review",
    progress: 1,
    goal: 3,
  },
];

const QuestBottomSheet = ({
  isOpen,
  setIsOpen,
}: CustomizedBottomSheetProps) => {
  return (
    <CustomizedBottomSheet isOpen={isOpen} setIsOpen={setIsOpen}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "10px",
        }}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: 400 }}>
          ภารกิจ
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            width: "100%",
            gap: "30px",
          }}
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
        </Box>
      </Box>
    </CustomizedBottomSheet>
  );
};

export default QuestBottomSheet;
