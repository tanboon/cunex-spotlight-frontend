import { Button, Stack, Typography } from "@mui/material";

function HomeButtonFooter() {
  return (
    <>
      <Stack
        sx={{
          backgroundColor: "#E26385",
          padding: "10px",
          borderRadius: "32px",
        }}
      >
        <Button
          sx={{
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
            backgroundColor: "#ffffff",
            borderRadius: "32px",
          }}
        >
          <Typography fontSize={16} fontWeight={400}>
            เช็คอิน
          </Typography>
        </Button>
      </Stack>
    </>
  );
}

export default HomeButtonFooter;
