"use client";

import React, { useState } from "react";
import { Stack } from "@mui/material";

import { StyledBoxSearchFilter } from "./styles";
import CustomizeSearchFilterIcon from "@/app/components/customs/customized-search-filter-icon";
import { useBoolean } from "@/app/hooks/use-boolean";

const SEARCH_FILTER = [
  { text: "อาคาร", iconPath: "/Material/Icon/Building.svg" },
  { text: "Co-working space", iconPath: "/Material/Icon/Meeting_Room.svg" },
  { text: "ร้านอาหาร", iconPath: "/Material/Icon/Restaurant.svg" },
  { text: "ห้องน้ำ", iconPath: "/Material/Icon/Toilet.svg" },
  { text: "ตู้กดน้ำ", iconPath: "/Material/Icon/Water_Cooler.svg" },
];

function HomeSearchFilter() {
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);
  const isSelectAll = useBoolean();

  function handleFilterClick(filterText: string) {
    if (selectedFilter.includes(filterText)) {
      setSelectedFilter(selectedFilter.filter((text) => text !== filterText));
    } else {
      setSelectedFilter([...selectedFilter, filterText]);
    }
  }

  function handleSelectAllClick() {
    if (isSelectAll.value) {
      setSelectedFilter([]);
      isSelectAll.onFalse();
    } else {
      setSelectedFilter(SEARCH_FILTER.map((filter) => filter.text));
      isSelectAll.onTrue();
    }
  }

  return (
    <StyledBoxSearchFilter>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          p: 1,
          pl: 2.5,
          minWidth: "min-content",
        }}
      >
        <CustomizeSearchFilterIcon
          key={"Select All"}
          text={"ทั้งหมด"}
          onClick={handleSelectAllClick}
          isSelected={isSelectAll.value}
        />
        {SEARCH_FILTER.map((filter) => (
          <CustomizeSearchFilterIcon
            key={filter.text}
            text={filter.text}
            iconPath={filter.iconPath}
            onClick={() => handleFilterClick(filter.text)}
            isSelected={selectedFilter.includes(filter.text)}
          />
        ))}
      </Stack>
    </StyledBoxSearchFilter>
  );
}

export default HomeSearchFilter;
