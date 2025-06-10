"use client";

import { mockReviewData } from "@/app/constant/mock-review-data";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Tabs,
  Typography,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import { X } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const FULL_TEXT = `คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย เป็นคณะวิศวกรรมศาสตร์ในประเทศไทยที่เก่าแก่ที่สุด และเป็น 1 ใน 4 คณะแรกตั้งของจุฬาลงกรณ์มหาวิทยาลัย ถือกำเนิดมาจากโรงเรียนยันตรศึกษาแห่งโรงเรียนข้าราชการพลเรือนของพระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว ถือเป็นคณะที่มีจำนวนรุ่นมากที่สุดในจุฬาลงกรณ์มหาวิทยาลัย โดยในปีการศึกษา 2567 เป็นรุ่นที่ 108 คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย มีหน้าที่หลักในการผลิตบัณฑิตวิศวกรรมศาสตร์ทั้งในระดับปริญญาบัณฑิตและบัณฑิตศึกษา ศึกษาวิจัยและพัฒนาองค์ความรู้ทางวิศวกรรมศาสตร์และเผยแพร่องค์ความรู้สู่ประชาชนทั่วไป เพื่อเป็นที่พึ่งพิงทางวิชาการให้กับประเทศ มีงานวิจัยและความร่วมมือทางวิชาการซึ่งเป็นที่ยอมรับในระดับชาติและระดับนานาชาติ ปัจจุบันมีภาควิชาทั้งหมด 12 ภาควิชาและหน่วยงานเทียบเท่าภาควิชาอีก 2 หน่วยงาน นิสิตคณะวิศวกรรมศาสตร์ มักเรียกแทนตัวเองว่า "อินทาเนีย" - คณะวิศวกรรมศาสตร์ตั้งอยู่ในพื้นที่จุฬาลงกรณ์มหาวิทยาลัยฝั่งถนนอังรีดูนังต์ ด้านข้างหอประชุมจุฬาลงกรณ์มหาวิทยาลัย`;
const TRUNCATED_TEXT = FULL_TEXT.substring(0, 500);

export default function Page() {
  const [tab, setTab] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  const params = useParams();
  const router = useRouter();

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
            คณะวิศวกรรมศาสตร์
          </Typography>
          <IconButton
            sx={{ padding: "1px", border: "1px solid #666666" }}
            onClick={() => {
              router.back();
            }}
          >
            <X strokeWidth={"1px"} />
          </IconButton>
        </Stack>
        <Box sx={{ width: "100%", height: "220px", marginTop: "10px" }}>
          <img
            src="/Picture/building_2.jpg"
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
            {expanded ? FULL_TEXT : TRUNCATED_TEXT}
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
