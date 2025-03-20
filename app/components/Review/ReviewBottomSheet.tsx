import React from "react";
import CustomizedBottomSheet from "../Custom/CustomizedButtomSheet";
import {
  Avatar,
  Box,
  Button,
  ButtonProps,
  Divider,
  Rating,
  styled,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import StarIcon from "@mui/icons-material/Star";
import { useRouter } from "next/navigation";

export const mockReviewData = [
  {
    rate: 4,
    review:
      "สถานที่สะอาด บริการดีมาก สถานที่สะอาด บริการดีมาก สถานที่สะอาด บริการดีมาก",
    name: "John Doe",
    role: "Student",
    created_date: "2025-03-11T10:00:00Z",
  },
  {
    rate: 5,
    review: "ประสบการณ์ที่ยอดเยี่ยม บริการเป็นมิตรและสถานที่สะอาดมาก",
    name: "Jane Smith",
    role: "Faculty",
    created_date: "2025-03-10T14:30:00Z",
  },
  {
    rate: 3,
    review: "บางอย่างยังต้องปรับปรุง แต่โดยรวมก็โอเค",
    name: "Alice Brown",
    role: "Student",
    created_date: "2025-03-09T08:15:00Z",
  },
  {
    rate: 4.5,
    review: "อาหารอร่อยและบริการรวดเร็ว สถานที่สะอาดและเป็นระเบียบมาก",
    name: "Bob Johnson",
    role: "Visitor",
    created_date: "2025-03-08T16:45:00Z",
  },
  {
    rate: 4,
    review: "บรรยากาศดีและสถานที่สะอาด บริการเป็นมิตรและเป็นมืออาชีพ",
    name: "Carol White",
    role: "Student",
    created_date: "2025-03-07T12:00:00Z",
  },
  {
    rate: 2.5,
    review: "บริการช้าเล็กน้อยและยังมีบางส่วนที่ควรปรับปรุง",
    name: "David Green",
    role: "Visitor",
    created_date: "2025-03-06T09:30:00Z",
  },
  {
    rate: 5,
    review: "สุดยอด! บริการยอดเยี่ยมและสถานที่สะอาดมาก",
    name: "Eva Gray",
    role: "Professor",
    created_date: "2025-03-05T18:20:00Z",
  },
  {
    rate: 4,
    review: "ประสบการณ์ที่ดี บริการเป็นมิตรและสถานที่สะอาด",
    name: "Frank Black",
    role: "Student",
    created_date: "2025-03-04T07:45:00Z",
  },
  {
    rate: 3.5,
    review: "ยังมีจุดที่ควรปรับปรุง แต่โดยรวมก็โอเค",
    name: "Grace Pink",
    role: "Student",
    created_date: "2025-03-03T11:10:00Z",
  },
  {
    rate: 4.5,
    review: "แนะนำให้มาเยือน สถานที่สะอาด บริการดีมาก",
    name: "Henry Blue",
    role: "Alumni",
    created_date: "2025-03-02T20:05:00Z",
  },
];

interface ReviewBottomSheetProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#FFFFFF",
  backgroundColor: "#E26385",
  "&:hover": {
    backgroundColor: "#E26385",
  },
}));

const ReviewBottomSheet = ({ isOpen, setIsOpen }: ReviewBottomSheetProps) => {
  const averageRate =
    mockReviewData.reduce((acc, cur) => acc + cur.rate, 0) /
    mockReviewData.length;
  const reviewCount = mockReviewData.length;
  const router = useRouter();

  return (
    <CustomizedBottomSheet isOpen={isOpen} setIsOpen={setIsOpen}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography sx={{ fontSize: "20px" }}>Reviews</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <Typography
              sx={{ fontSize: "10px", color: "#626262", p: "0px !important" }}
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
              sx={{ fontSize: "14px" }}
              size="small"
            />
            <Typography sx={{ fontSize: "10px", color: "#626262" }}>
              {`(${reviewCount})`}
            </Typography>
          </Box>
          <Typography sx={{ fontSize: "14px", color: "#626262", pt: "4px" }}>
            โรงอาหารคณะวิศวฯ
          </Typography>
        </Box>
        <ColorButton
          sx={{
            fontSize: "10px",
            paddingX: "22px",
            paddingY: "10px",
            fontWeight: 600,
            borderRadius: "8px",
          }}
          variant="contained"
          color="error"
          onClick={() => router.push("review/1")}
        >
          รีวิว
        </ColorButton>
      </Box>
      <Grid
        container
        width={"300px"}
        height={"210px"}
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
                borderRadius: "8px",
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
                  borderRadius: "8px",
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
                  borderRadius: "8px",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          marginTop: 2,
          gap: "4px",
        }}
      >
        <Typography
          fontSize={"14px"}
        >{`รีวิว (${mockReviewData.length})`}</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            gap: "8px",
          }}
        >
          <Box
            sx={{
              color: "#262626",
              fontSize: "12px",
              paddingX: "8px",
              paddingY: "2px",
              backgroundColor: "#EDEDED",
              borderRadius: "7px",
              ":hover": {
                backgroundColor: "#CBCBCB",
              },
              transition: "background-color 0.3s",
            }}
          >
            ล่าสุด
          </Box>
          <Box
            sx={{
              color: "#262626",
              fontSize: "12px",
              paddingX: "8px",
              paddingY: "2px",
              backgroundColor: "#EDEDED",
              borderRadius: "7px",
              ":hover": {
                backgroundColor: "#CBCBCB",
              },
              transition: "background-color 0.3s",
            }}
          >
            สูงสุด
          </Box>
          <Box
            sx={{
              color: "#262626",
              fontSize: "12px",
              paddingX: "8px",
              paddingY: "2px",
              backgroundColor: "#EDEDED",
              borderRadius: "7px",
              ":hover": {
                backgroundColor: "#CBCBCB",
              },
              transition: "background-color 0.3s",
            }}
          >
            ต่ำสุด
          </Box>
        </Box>
        <Divider sx={{ width: "100%", color: "#EAEAEA", mt: "8px" }} />
        {mockReviewData.map((review, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginY: "6px",
                gap: "6px",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
                <Avatar sx={{ width: "35px", height: "35px" }} />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
                    {review.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: "10px",
                      color: "#626262",
                    }}
                  >
                    {review.role}
                  </Typography>
                </Box>
              </Box>
              <Rating
                name="review-rating"
                defaultValue={review.rate}
                readOnly
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
                sx={{ fontSize: "14px" }}
                size="small"
              />
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 300,
                  lineHeight: "16px",
                  color: "#434343",
                  textAlign: "left",
                }}
              >
                {review.review}
              </Typography>
            </Box>
            <Divider
              sx={{ width: "100%", color: "#EAEAEA", marginTop: "6px" }}
            />
          </Box>
        ))}
      </Box>
    </CustomizedBottomSheet>
  );
};

export default ReviewBottomSheet;
