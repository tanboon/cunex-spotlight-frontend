"use client";

import CancelIcon from "@/app/components/icons/cancel-icon";
import { mockReviewData } from "@/app/constant/mock-review-data";
import { Avatar, Box, Divider, Stack, Tabs, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import FacultyDetails from "./constants/faculty-detail";
import { TFaculty } from "./types";

export default function Page() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const [tab, setTab] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const facultyDetail: TFaculty = FacultyDetails[parseInt(params.id)];
  const fullText = facultyDetail.detail;
  const truncatedText = facultyDetail.detail.substring(0, 500);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  if (!facultyDetail) {
    return "";
  }

  return (
    <Stack
      sx={{
        height: "100vh",
        paddingTop: "112px",
        paddingBottom: "28px",
        paddingX: 2,
        justifyContent: "space-between",
      }}
    >
      <Stack spacing={1.25}>
        <Stack
          direction={"row"}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: 300 }}>
            {facultyDetail.name}
          </Typography>
          <CancelIcon
            sx={{ padding: "1px", border: "1px solid #666666" }}
            onClick={() => router.back()}
          />
        </Stack>
        <Box sx={{ width: "100%", height: "220px", marginTop: "10px" }}>
          <img
            src={facultyDetail.image}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
          <Tabs
            value={tab}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              "& .MuiTab-root": {
                color: "#909090",
                fontSize: "16px",
                "&.Mui-selected": {
                  color: "#E26385",
                },
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "#E26385",
              },
            }}
          >
            <Tab label="เกี่ยวกับ" tabIndex={0} />
            <Tab label="เรื่องเล่า" tabIndex={1} />
          </Tabs>
        </Box>
        <Box hidden={tab !== 0} sx={{ paddingX: "18px" }}>
          <Typography
            sx={{
              color: "#434343",
              fontSize: "13px",
              textAlign: "left",
              fontWeight: 300,
            }}
          >
            {expanded ? fullText : truncatedText}
            <u
              onClick={toggleReadMore}
              style={{
                padding: "0px 4px",
                fontWeight: 600,
              }}
            >
              {expanded ? "ดูน้อยลง" : "ดูเพิ่มเติม"}
            </u>
          </Typography>
        </Box>
        <Stack hidden={tab !== 1}>
          <Box sx={{ width: "100%", height: "330px", overflow: "auto" }}>
            {mockReviewData.map((review, index) => (
              <Stack
                key={index}
                sx={{
                  marginTop: index !== 0 ? "6px" : 0,
                }}
              >
                <Stack
                  sx={{
                    marginY: "6px",
                  }}
                  spacing={6 / 8}
                >
                  <Stack direction={"row"} spacing={1}>
                    <Avatar sx={{ width: "35px", height: "35px" }} />
                    <Stack>
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
                    </Stack>
                  </Stack>
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
                </Stack>
                <Divider
                  sx={{ width: "100%", color: "#EAEAEA", marginTop: "4px" }}
                />
              </Stack>
            ))}
          </Box>
        </Stack>
      </Stack>
      <Stack
        hidden={tab !== 1}
        sx={{
          backgroundColor: "#E26385",
          padding: "10px",
          borderRadius: "32px",
          marginBottom: "20px",
        }}
      >
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
            backgroundColor: "#ffffff",
            borderRadius: "32px",
          }}
          onClick={() => {
            router.push(`${params.id}/add`);
          }}
        >
          <Typography fontSize={"16px"} fontWeight={300} color="#E26385">
            เช็คอิน
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
