import { Proto } from "../../../graphql/generated";
import MemoCard from "../../memo/MemoCard/MemoCard";
import ScreenSection from "../../layout/ScreenSection";

interface TodaySectionProps {
  data: Partial<Proto>;
}

export default function TodaySection({ data }: TodaySectionProps) {
  const { title, createdAt } = data;

  return (
    <ScreenSection title="Today's Memo">
      <MemoCard title={title} date={createdAt} />
    </ScreenSection>
  );
}
