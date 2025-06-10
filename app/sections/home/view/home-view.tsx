import HomeMap from "../home-map";
import { Box } from "@mui/material";
import HomeSearchFilter from "../home-search-filter";
import HomeFooter from "../home-footer";
import HomeHeader from "../home-header";
import { StyledBoxView } from "../styles";

function HomeView() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      <HomeHeader />
      <HomeMap />
      <StyledBoxView>
        <HomeSearchFilter />
        <HomeFooter />
      </StyledBoxView>
    </Box>
  );
}

export default HomeView;
