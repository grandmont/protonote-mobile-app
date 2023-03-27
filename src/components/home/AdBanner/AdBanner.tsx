import {
  BannerAd,
  TestIds,
  BannerAdSize,
} from "react-native-google-mobile-ads";
import { View } from "react-native-ui-lib";

import usePlatform from "@hooks/usePlatform";

import { IOS_BANNER_ID, ANDROID_BANNER_ID } from "@config/constants";

export default function AdBanner() {
  const { isIOS } = usePlatform();

  const adUnitId = __DEV__
    ? TestIds.BANNER
    : isIOS
    ? IOS_BANNER_ID
    : ANDROID_BANNER_ID;

  return (
    <View marginB-24 style={{ marginLeft: -18 }}>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  );
}
