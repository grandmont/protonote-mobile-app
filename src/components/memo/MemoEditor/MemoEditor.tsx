import { TextInput } from "react-native";

import ScreenSection from "../../layout/ScreenSection";

export default function MemoEditor({ onChange }) {
  return (
    <ScreenSection title="Description" marginB-24>
      <TextInput
        placeholder="Start typing..."
        onChangeText={onChange}
        style={{
          height: "100%",
        }}
        multiline
      />
    </ScreenSection>
  );
}
