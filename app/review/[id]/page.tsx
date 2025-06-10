"use client";

import ControlledTextField from "@/app/components/controllers/controlled-text-field";
import { reviewSchema, reviewValidation } from "@/app/schema/reviewSchema";
import { IReview } from "@/app/types/review";
import { yupResolver } from "@hookform/resolvers/yup";
import AddIcon from "@mui/icons-material/Add";
import { Avatar, Rating, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { StyledButtonReview, StyledInputReview } from "./style";

export default function Page() {
  const { control, setValue } = useForm<IReview>({
    defaultValues: reviewSchema,
    resolver: yupResolver(reviewValidation),
    mode: "onChange",
  });

  return (
    <Stack
      sx={{
        justifyContent: "space-between",
        height: "100vh",
        paddingTop: "112px",
        paddingBottom: "28px",
        paddingX: 2,
      }}
    >
      <Stack spacing={1.25}>
        <Stack
          sx={{
            marginY: "6px",
          }}
          spacing={0.75}
        >
          <Stack direction="row" spacing={1}>
            <Avatar sx={{ width: 35, height: 35 }} />
            <Stack alignItems="start">
              <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
                นายสมชาย ใจดี
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "10px",
                  color: "#626262",
                }}
              >
                Student
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack sx={{ alignItems: "center", marginBottom: "20px !important" }}>
          <Rating
            name="review-rating"
            defaultValue={0}
            sx={{ fontSize: 40 }}
            onChange={(event, newValue) => {
              if (newValue !== null) {
                setValue("rate", newValue);
              }
            }}
          />
        </Stack>
        <Stack
          sx={{
            height: "160px",
            marginTop: "10px",
          }}
        >
          <ControlledTextField
            name="review"
            control={control}
            multiline
            rows={6}
            sx={{
              height: "100%",
              "& .MuiInputBase-root": {
                borderRadius: "12px",
              },
              fontSize: "14px",
            }}
            InputProps={{
              style: { padding: "10px" },
            }}
          />
        </Stack>
        <StyledButtonReview
          fullWidth
          variant="contained"
          component="label"
          sx={{ borderRadius: "8px", fontSize: "14px", fontWeight: 300 }}
          startIcon={<AddIcon sx={{ width: "15px", height: "15px" }} />}
        >
          เพิ่มรูปภาพ
          <StyledInputReview
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
          />
        </StyledButtonReview>
      </Stack>
      <StyledButtonReview>โพสต์</StyledButtonReview>
    </Stack>
  );
}
