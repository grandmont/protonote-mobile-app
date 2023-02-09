import { useEffect, useRef } from "react";
import { TextInput } from "react-native";

import ScreenSection from "../../layout/ScreenSection";

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
    // <ScreenSection title="Description" marginB-24>
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
    />
    // </ScreenSection>
  );
}
