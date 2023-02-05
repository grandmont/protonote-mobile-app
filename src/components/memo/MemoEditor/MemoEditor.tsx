import { TextInput } from "react-native";

import ScreenSection from "../../layout/ScreenSection";

export default function MemoEditor({
  defaultValue = "",
  onChange,
  inputAccessoryViewID,
}) {
  return (
    <ScreenSection title="Description" marginB-24>
      <TextInput
        placeholder="Start typing..."
        defaultValue={defaultValue}
        onChangeText={onChange}
        inputAccessoryViewID={inputAccessoryViewID}
        style={{
          height: "100%",
        }}
        multiline
      />
    </ScreenSection>
  );
}
