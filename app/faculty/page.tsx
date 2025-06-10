import { Stack } from "@mui/material";
import CustomizedSearchBar from "../components/customs/customzied-search-bar";

export default function Page() {
  return (
    <Stack sx={{ marginTop: 12.5, border: "1px solid #000000" }}>
      <CustomizedSearchBar />
    </Stack>
  );
}
