import { TextFieldProps } from "@mui/material";
import { forwardRef } from "react";
import { StyledTextField } from "./style";

type ExtendedTextFieldProps = TextFieldProps & {
  testId?: string;
};

const CustomizedTextField = forwardRef<
  HTMLInputElement,
  ExtendedTextFieldProps
>(
  (
    {
      id,
      name,
      label,
      value,
      onChange,
      onBlur,
      disabled,
      multiline,
      rows,
      error,
      helperText,
      sx,
      required,
      placeholder,
      margin,
      maxRows,
      minRows,
      type,
      autoFocus,
      onKeyDown,
      size,
      testId,
    },
    ref
  ) => {
    return (
      <StyledTextField
        ref={ref}
        placeholder={placeholder}
        autoComplete="off"
        size={size || "small"}
        data-test-id={testId}
        autoFocus={autoFocus}
        fullWidth
        label={label}
        sx={sx}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        type={type ? type : "text"}
        id={id}
        name={name}
        multiline={multiline}
        rows={rows}
        error={error}
        helperText={helperText}
        margin={margin}
        maxRows={maxRows}
        minRows={minRows}
        required={required}
        onKeyDown={onKeyDown}
      />
    );
  }
);

export default CustomizedTextField;
