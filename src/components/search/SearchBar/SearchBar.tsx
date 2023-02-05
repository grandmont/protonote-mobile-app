import { View } from "react-native-ui-lib";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { BOTTOM_TAB_ICON_SIZE } from "../../../config/constants";

const SearchBar = ({ searchPhrase, setSearchPhrase, inputAccessoryViewID }) => {
  return (
    <View row centerV br100 marginB-12 width="100%" backgroundColor="#ededed">
      <View padding-12 paddingR-0>
        <Ionicons name="md-search" size={BOTTOM_TAB_ICON_SIZE} color="black" />
      </View>
      <TextInput
        placeholder="Search"
        value={searchPhrase}
        onChangeText={setSearchPhrase}
        inputAccessoryViewID={inputAccessoryViewID}
        style={{
          // backgroundColor: "grey",
          padding: 12,
          width: "90%",
        }}
      />
    </View>
  );
};
export default SearchBar;
