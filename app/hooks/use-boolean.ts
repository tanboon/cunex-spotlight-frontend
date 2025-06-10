import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";

// ----------------------------------------------------------------------

type UseBooleanReturn = {
  value: boolean;
  onTrue: () => void;
  onFalse: () => void;
  onToggle: () => void;
  setValue: Dispatch<SetStateAction<boolean>>;
};

function useBoolean(defaultValue: boolean = false): UseBooleanReturn {
  const [value, setValue] = useState(defaultValue);
  const onTrue = () => {
    setValue(true);
  };
  const onFalse = () => {
    setValue(false);
  };
  const onToggle = () => {
    setValue((prev) => !prev);
  };
  return {
    value,
    onTrue,
    onFalse,
    onToggle,
    setValue,
  };
}

export type { UseBooleanReturn };

export { useBoolean };
