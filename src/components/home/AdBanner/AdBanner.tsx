import {
  BannerAd,
  TestIds,
  BannerAdSize,
} from "react-native-google-mobile-ads";

export default function AdBanner() {
  return <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.BANNER} />;
}
