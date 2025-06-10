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

export { mockQuests };
