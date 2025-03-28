"use client";

import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import { CustomizeSearchFilterIcon } from "../../Custom/CustomizedSearchFilterIcon";

const initialSearchFilters = [
  { text: "อาคาร", iconPath: "/material/icon/Building.svg" },
  { text: "Co-working space", iconPath: "/material/icon/Meeting_Room.svg" },
  { text: "ร้านอาหาร", iconPath: "/material/icon/Restaurant.svg" },
  { text: "ห้องน้ำ", iconPath: "/material/icon/Toilet.svg" },
  { text: "ตู้กดน้ำ", iconPath: "/material/icon/Water_Cooler.svg" },
];

export const SearchFilterHeader = () => {
  const [searchFilters, setSearchFilters] = useState([...initialSearchFilters]);
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterClick = (filterText: string) => {
    setSelectedFilter(filterText);

    const index = searchFilters.findIndex(
      (filter) => filter.text === filterText
    );

    if (index > 0) {
      const newFilters = [...searchFilters];
      const selectedFilter = newFilters.splice(index, 1)[0];
      newFilters.unshift(selectedFilter);
      setSearchFilters(newFilters);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{
          p: 1,
          pl: "20px",
          minWidth: "min-content",
        }}
      >
        {searchFilters.map((filter) => (
          <CustomizeSearchFilterIcon
            key={filter.text}
            text={filter.text}
            iconPath={filter.iconPath}
            onClick={() => handleFilterClick(filter.text)}
            isSelected={selectedFilter === filter.text}
          />
        ))}
      </Stack>
    </Box>
  );
};
