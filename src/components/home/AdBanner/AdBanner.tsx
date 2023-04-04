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

  return (
    <View
      marginB-24
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.BANNER}
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
