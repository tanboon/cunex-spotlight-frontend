"use client";

import { useBoolean } from "@/app/hooks/use-boolean";
import { IconButton, InputBase, Paper } from "@mui/material";
import { SearchIcon } from "lucide-react";

import { Controller, useForm } from "react-hook-form";
import CancelIcon from "../icons/cancel-icon";

function CustomizedSearchBar() {
  const defaultValues = { search: "" };

  const isInputFocused = useBoolean();
  const { handleSubmit, reset, control } = useForm({
    defaultValues: defaultValues,
  });

  function onSubmit(data: typeof defaultValues) {
    console.log("Search submitted:", data);
  }

  function handleClear() {
    reset({ search: "" });
  }

  return (
    <Paper
      component="form"
      elevation={0}
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        p: "4px 8px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#EDEDED",
        borderRadius: 4,
      }}
    >
      <Controller
        name="search"
        control={control}
        render={({ field }) => (
          <InputBase
            {...field}
            sx={{ ml: 1 }}
            placeholder="ค้นหาคณะ วิทยาลัย และสถาบัน"
            inputProps={{ "aria-label": "search google maps" }}
            onFocus={isInputFocused.onTrue}
            onBlur={isInputFocused.onFalse}
            endAdornment={
              isInputFocused.value && (
                <CancelIcon
                  sx={{ padding: 0, border: "1px solid #666666" }}
                  onClick={handleClear}
                />
              )
            }
            fullWidth
          />
        )}
      ></Controller>

      <IconButton type="submit" sx={{ p: 1.25 }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default CustomizedSearchBar;
