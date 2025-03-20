"use client";

import { reviewSchema, reviewValidation } from "@/app/schema/reviewSchema";
import { IReview } from "@/app/types/review";
import {
  Avatar,
  Box,
  Button,
  ButtonProps,
  Divider,
  IconButton,
  Rating,
  styled,
  Tabs,
  Typography,
} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams, useRouter } from "next/navigation";
import { set, useForm } from "react-hook-form";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { X } from "lucide-react";
import { mockReviewData } from "@/app/components/Review/ReviewBottomSheet";

export default function Page() {
  const { control, setValue } = useForm<IReview>({
    defaultValues: reviewSchema,
    resolver: yupResolver(reviewValidation),
    mode: "onChange",
  });

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

  const fullText = `คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย เป็นคณะวิศวกรรมศาสตร์ในประเทศไทยที่เก่าแก่ที่สุด และเป็น 1 ใน 4 คณะแรกตั้งของจุฬาลงกรณ์มหาวิทยาลัย ถือกำเนิดมาจากโรงเรียนยันตรศึกษาแห่งโรงเรียนข้าราชการพลเรือนของพระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว ถือเป็นคณะที่มีจำนวนรุ่นมากที่สุดในจุฬาลงกรณ์มหาวิทยาลัย โดยในปีการศึกษา 2567 เป็นรุ่นที่ 108 คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย มีหน้าที่หลักในการผลิตบัณฑิตวิศวกรรมศาสตร์ทั้งในระดับปริญญาบัณฑิตและบัณฑิตศึกษา ศึกษาวิจัยและพัฒนาองค์ความรู้ทางวิศวกรรมศาสตร์และเผยแพร่องค์ความรู้สู่ประชาชนทั่วไป เพื่อเป็นที่พึ่งพิงทางวิชาการให้กับประเทศ มีงานวิจัยและความร่วมมือทางวิชาการซึ่งเป็นที่ยอมรับในระดับชาติและระดับนานาชาติ ปัจจุบันมีภาควิชาทั้งหมด 12 ภาควิชาและหน่วยงานเทียบเท่าภาควิชาอีก 2 หน่วยงาน นิสิตคณะวิศวกรรมศาสตร์ มักเรียกแทนตัวเองว่า "อินทาเนีย" - คณะวิศวกรรมศาสตร์ตั้งอยู่ในพื้นที่จุฬาลงกรณ์มหาวิทยาลัยฝั่งถนนอังรีดูนังต์ ด้านข้างหอประชุมจุฬาลงกรณ์มหาวิทยาลัย`;

  const truncatedText = fullText.substring(0, 500);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        paddingTop: "112px",
        paddingBottom: "28px",
        paddingX: 2,
        justifyContent: "space-between",
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
            flexDirection: "row",
            width: "100%",
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
        </Box>
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
          }}
          hidden={tab !== 1}
        >
          <Box sx={{ width: "100%", height: "330px", overflow: "auto" }}>
            {mockReviewData.map((review, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  alignItems: "start",
                  marginTop: index !== 0 ? "6px" : 0,
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
                  <Box
                    sx={{ display: "flex", flexDirection: "row", gap: "8px" }}
                  >
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
                  sx={{ width: "100%", color: "#EAEAEA", marginTop: "4px" }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        hidden={tab !== 1}
        sx={{
          display: "flex",
          width: "100%",
          backgroundColor: "#E26385",
          padding: "10px",
          borderRadius: "32px",
          marginBottom: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
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
        </Box>
      </Box>
    </Box>
  );
}
