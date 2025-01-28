import { Box } from "@mui/material";
import { ChulalongKornMap } from "./components/Map/ChulalongkornMap";
import HomeHeader from "./components/Home/Header/HomeHeader";
import { SearchFilterHeader } from "./components/Home/Header/SearchFilterHeader";
import { HomeFooter } from "./components/Home/Footer/HomeFooter";

export default function Home() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      <HomeHeader />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <ChulalongKornMap />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "5rem",
          left: 0,
          width: "100%",
          height: "calc(100% - 5rem)",
          zIndex: 2,
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ pointerEvents: "auto" }}>
          <SearchFilterHeader />
        </Box>
        <Box sx={{ pointerEvents: "auto" }}>
          <HomeFooter />
        </Box>
      </Box>
    </Box>
  );
}
