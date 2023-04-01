import { useEffect, useRef } from "react";
import { TextInput } from "react-native";

export default function MemoEditor({
  defaultValue = "",
  onChange,
  inputAccessoryViewID,
}) {
  const inputRef = useRef<TextInput>();

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  return (
    <TextInput
      ref={inputRef}
      placeholder="Start typing..."
      defaultValue={defaultValue}
      onChangeText={onChange}
      inputAccessoryViewID={inputAccessoryViewID}
      style={{
        height: "100%",
      }}
      multiline
      // Android only
      textAlignVertical="top"
    />
  );
}
