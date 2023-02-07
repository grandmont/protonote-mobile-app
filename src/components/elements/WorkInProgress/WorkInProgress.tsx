import { Card, Text, Incubator } from "react-native-ui-lib";
const { Dialog } = Incubator;

export default function WorkInProgress() {
  return (
    <Dialog
      visible
      containerStyle={{
        top: "40%",
      }}
    >
      <Card padding-16 center>
        <Text title>Work in progress</Text>
        <Text marginT-12 marginB-12 center>
          This functionality is currently a work in progress and should be
          available on future versions
        </Text>
      </Card>
    </Dialog>
  );
}
