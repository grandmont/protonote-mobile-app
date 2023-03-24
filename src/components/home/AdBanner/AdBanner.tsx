import {
  BannerAd,
  TestIds,
  BannerAdSize,
} from "react-native-google-mobile-ads";
import { View } from "react-native-ui-lib";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-4452701921985328/8864292069";

export default function AdBanner() {
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
