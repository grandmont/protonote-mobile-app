import { View, Text, Button, Image } from "react-native-ui-lib";

import { Proto } from "../../../graphql/generated";
import Card from "../../elements/Card/Card";
import ScreenSection from "../../layout/ScreenSection";

interface TodaySectionProps {
  data: Proto;
}

export default function TodaySection({ data }) {
  return (
    <ScreenSection title="Today's Memo">
      <Card title={data.title} />
    </ScreenSection>
  );
}
