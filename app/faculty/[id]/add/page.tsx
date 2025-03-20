"use client";

import { reviewSchema, reviewValidation } from "@/app/schema/reviewSchema";
import { IReview } from "@/app/types/review";
import {
  Avatar,
  Box,
  Button,
  ButtonProps,
  Rating,
  styled,
  Typography,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import ControlledTextField from "@/app/components/Controller/ControlledTextField";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#FFFFFF",
  backgroundColor: "#E26385",
  "&:hover": {
    backgroundColor: "#E26385",
  },
}));

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Page() {
  const { control, setValue } = useForm<IReview>({
    defaultValues: reviewSchema,
    resolver: yupResolver(reviewValidation),
    mode: "onChange",
  });

  const params = useParams();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100vh",
        paddingTop: "112px",
        paddingBottom: "28px",
        paddingX: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "start",
          gap: "10px",
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
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "100%",
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
        </Box>
        <ColorButton
          fullWidth
          variant="contained"
          component="label"
          sx={{ borderRadius: "8px", fontSize: "14px", fontWeight: 300 }}
          startIcon={<AddIcon sx={{ width: "15px", height: "15px" }} />}
        >
          เพิ่มรูปภาพ
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
          />
        </ColorButton>
      </Box>
      <ColorButton
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
      </ColorButton>
    </Box>
  );
}
