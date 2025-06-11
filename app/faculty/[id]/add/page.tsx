"use client";

import ControlledTextField from "@/app/components/controllers/controlled-text-field";
import { reviewSchema, reviewValidation } from "@/app/schema/reviewSchema";
import { IReview } from "@/app/types/review";
import { yupResolver } from "@hookform/resolvers/yup";
import AddIcon from "@mui/icons-material/Add";
import { Avatar, Stack, Typography } from "@mui/material";

import { useForm } from "react-hook-form";
import { StyledColorButton, StyledVisuallyHiddenInput } from "../styles";

export default function Page() {
  const { control } = useForm<IReview>({
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
          spacing={6 / 8}
          sx={{
            marginY: "6px",
          }}
        >
          <Stack direction={"row"} spacing={1}>
            <Avatar sx={{ width: "35px", height: "35px" }} />
            <Stack>
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
        <StyledColorButton
          fullWidth
          variant="contained"
          component="label"
          sx={{ borderRadius: "8px", fontSize: "14px", fontWeight: 300 }}
          startIcon={<AddIcon sx={{ width: "15px", height: "15px" }} />}
        >
          เพิ่มรูปภาพ
          <StyledVisuallyHiddenInput
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
          />
        </StyledColorButton>
      </Stack>
      <StyledColorButton
        sx={{
          marginBottom: "10px",
          marginX: "10px",
          paddingY: "10px",
          borderRadius: "20px",
          fontSize: "18px",
          fontWeight: 600,
        }}
      >
        โพสต์
      </StyledColorButton>
    </Stack>
  );
}
