import { mockReviewData } from "@/app/constant/mock-review-data";
import StarIcon from "@mui/icons-material/Star";
import { Avatar, Box, Divider, Rating, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useRouter } from "next/navigation";
import { StyledBoxReviewBottomSheet, StyledButtonReview } from "./styles";

function HomeReviewBottomSheet() {
  const averageRate =
    mockReviewData.reduce((acc, cur) => acc + cur.rate, 0) /
    mockReviewData.length;

  const reviewCount = mockReviewData.length;

  const router = useRouter();

  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            alignItems: "start",
          }}
        >
          <Typography sx={{ fontSize: 20 }}>Reviews</Typography>
          <Stack
            direction={"row"}
            sx={{
              alignItems: "center",
            }}
            spacing={0.25}
          >
            <Typography
              sx={{
                fontSize: 10,
                color: "#626262",
                p: "0px !important",
              }}
            >
              {averageRate.toFixed(1)}
            </Typography>
            <Rating
              name="review-rating"
              defaultValue={averageRate}
              readOnly
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
              sx={{ fontSize: 14 }}
              size="small"
            />
            <Typography sx={{ fontSize: 10, color: "#626262" }}>
              {`(${reviewCount})`}
            </Typography>
          </Stack>
          <Typography sx={{ fontSize: 14, color: "#626262", pt: 0.5 }}>
            โรงอาหารคณะวิศวฯ
          </Typography>
        </Stack>
        <StyledButtonReview
          sx={{
            fontSize: 10,
            paddingX: 2.75,
            paddingY: 1.25,
            fontWeight: 600,
            borderRadius: 2,
          }}
          variant="contained"
          color="error"
          onClick={() => router.push("review/1")}
        >
          รีวิว
        </StyledButtonReview>
      </Stack>
      <Grid
        container
        width={300}
        height={210}
        spacing={1}
        sx={{ marginTop: 1 }}
      >
        <Grid size={{ xs: 6 }} sx={{ height: "100%" }}>
          <Box sx={{ width: "100%", height: "100%" }}>
            <img
              src="Picture/canteen4.jpg"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
          </Box>
        </Grid>
        <Grid
          container
          direction={"column"}
          size={{ xs: 6 }}
          sx={{ height: "100%" }}
          spacing={1}
        >
          <Grid size={{ xs: 12 }} sx={{ height: "calc(50% - 4px)" }}>
            <Box sx={{ width: "100%", height: "100%" }}>
              <img
                src="Picture/canteen2.jpg"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12 }} sx={{ height: "calc(50% - 4px)" }}>
            <Box sx={{ width: "100%", height: "100%" }}>
              <img
                src="Picture/canteen3.jpg"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Stack
        sx={{
          alignItems: "start",
          marginTop: 2,
        }}
        spacing={0.5}
      >
        <Typography
          fontSize={14}
        >{`รีวิว (${mockReviewData.length})`}</Typography>
        <Stack direction={"row"} spacing={1}>
          <StyledBoxReviewBottomSheet>ล่าสุด</StyledBoxReviewBottomSheet>
          <StyledBoxReviewBottomSheet>สูงสุด</StyledBoxReviewBottomSheet>
          <StyledBoxReviewBottomSheet>ต่ำสุด</StyledBoxReviewBottomSheet>
        </Stack>
        <Divider
          sx={{ width: "100%", color: "#EAEAEA", marginTop: "10px !important" }}
        />
        {mockReviewData.map((review, index) => (
          <Stack
            key={index}
            sx={{
              width: "100%",
            }}
          >
            <Stack
              sx={{
                marginY: 0.75,
                gap: 0.75,
              }}
            >
              <Stack direction={"row"} spacing={1}>
                <Avatar sx={{ width: 35, height: 35 }} />
                <Stack alignItems="start">
                  <Typography sx={{ fontSize: 14, fontWeight: 400 }}>
                    {review.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 400,
                      lineHeight: 1.25,
                      color: "#626262",
                    }}
                  >
                    {review.role}
                  </Typography>
                </Stack>
              </Stack>
              <Rating
                name="review-rating"
                defaultValue={review.rate}
                readOnly
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
                sx={{ fontSize: 14 }}
                size="small"
              />
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 300,
                  lineHeight: 2,
                  color: "#434343",
                  textAlign: "left",
                }}
              >
                {review.review}
              </Typography>
            </Stack>
            <Divider sx={{ width: "100%", color: "#EAEAEA" }} />
          </Stack>
        ))}
      </Stack>
    </>
  );
}

export default HomeReviewBottomSheet;
