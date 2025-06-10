import { TextFieldProps } from "@mui/material";
import { Control, Controller } from "react-hook-form";
import CustomizedTextField from "../customs/customized-text-field";

type ExtendedTextFieldProps = {
  name: string;
  label?: TextFieldProps["label"];
  control: Control<any>;
  multiline?: TextFieldProps["multiline"];
  rows?: TextFieldProps["rows"];
  error?: TextFieldProps["error"];
  onChange?: (e: any, field?: any) => void;
  onBlur?: TextFieldProps["onBlur"];
  helperText?: TextFieldProps["helperText"];
  required?: TextFieldProps["required"];
  disabled?: TextFieldProps["disabled"];
  type?: TextFieldProps["type"];
  testId?: string;
  autoFocus?: TextFieldProps["autoFocus"];
  autoComplete?: TextFieldProps["autoComplete"];
  InputProps?: TextFieldProps["InputProps"];
  InputLabelProps?: TextFieldProps["InputLabelProps"];
  sx?: TextFieldProps["sx"];
  minRows?: TextFieldProps["minRows"];
  maxRows?: TextFieldProps["maxRows"];
  onKeyDown?: TextFieldProps["onKeyDown"];
  FormHelperTextProps?: TextFieldProps["FormHelperTextProps"];
  number?: boolean;
  allowNegativeNumber?: boolean;
  placeholder?: TextFieldProps["placeholder"];
};

function ControlledTextField({
  name,
  label,
  control,
  multiline,
  rows,
  error,
  onChange,
  onBlur,
  helperText,
  required,
  disabled,
  type,
  testId,
  autoFocus,
  autoComplete,
  sx,
  minRows,
  maxRows,
  onKeyDown,
  allowNegativeNumber,
  placeholder,
}: ExtendedTextFieldProps) {
  return (
    <Controller
      key={`${name}-text-field`}
      name={name}
      control={control}
      render={({ field }) => (
        <CustomizedTextField
          {...field}
          onChange={onChange ? (e: any) => onChange(e, field) : field.onChange}
          sx={sx}
          error={error}
          helperText={helperText}
          label={label}
          type={type}
          onBlur={onBlur}
          disabled={disabled}
          required={required}
          testId={testId}
          multiline={multiline}
          rows={rows}
          autoFocus={autoFocus}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onKeyDown={
            type === "number"
              ? (event) => {
                  if (
                    (!allowNegativeNumber && event?.key === "-") ||
                    event?.key === "+" ||
                    event?.key === "."
                  ) {
                    event.preventDefault();
                  }
                }
              : onKeyDown
          }
          minRows={minRows}
          maxRows={maxRows}
        />
      )}
    />
  );
}

export default ControlledTextField;
