import { Switch, Card, View } from "react-native-ui-lib";

export default function SwitchItem({ children, ...props }) {
  return (
    <Card padding-16 row spread centerV>
      {children}
      <Switch {...props} />
    </Card>
  );
}
