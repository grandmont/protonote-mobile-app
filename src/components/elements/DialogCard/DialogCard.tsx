import { Card, Text } from "react-native-ui-lib";

interface DialogCardProps {
  title: string;
  description?: string | React.ReactNode;
}

export default function DialogCard({ title, description }: DialogCardProps) {
  const isDescriptionString = typeof description === "string";

  return (
    <Card padding-16 center>
      <Text title>{title}</Text>

      {isDescriptionString ? (
        <Text marginV-12 numberOfLines={7}>
          {description}
        </Text>
      ) : (
        description
      )}
    </Card>
  );
}
