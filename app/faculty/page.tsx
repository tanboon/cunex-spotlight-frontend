import { Stack } from "@mui/material";
import CustomizedSearchBar from "../components/customs/customzied-search-bar";

export default function Page() {
  return (
    <Stack sx={{ paddingX: 1.5, marginTop: 13 }}>
      <CustomizedSearchBar />
    </Stack>
  );
}
