import { Dimensions } from "react-native";
import { View } from "react-native-ui-lib";
import {
  BannerAd,
  TestIds,
  BannerAdSize,
} from "react-native-google-mobile-ads";

import usePlatform from "@hooks/usePlatform";
import useAPISync from "@hooks/useAPISync";
import { IOS_BANNER_ID, ANDROID_BANNER_ID } from "@config/constants";

export default function AdBanner() {
  const { isIOS } = usePlatform();

  const { log } = useAPISync();

  const adUnitId = __DEV__
    ? TestIds.BANNER
    : isIOS
    ? IOS_BANNER_ID
    : ANDROID_BANNER_ID;

  const marginLeft = isIOS ? -18 : 0;

  const containerStyle = {
    marginLeft,
    width: Dimensions.get("screen").width,
    height: 50,
  };

  return (
    <View marginB-24 style={containerStyle}>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
        onAdFailedToLoad={async (error) => {
          await log({
            variables: {
              message: error.message,
            },
          });
        }}
      />
    </View>
  );
}
