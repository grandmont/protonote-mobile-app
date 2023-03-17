import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation } from "@apollo/client";

import {
  RefreshSpotifyAccessTokenDocument,
  SaveRecentlyPlayedTracksDocument,
} from "../graphql/generated";
import { getTodayDateString } from "../utils/parsers";

interface SpotifyHookReturnInterface {
  refreshAccessToken: () => Promise<void>;
  saveSpotifyTracks: () => Promise<void>;
}

export default function useSpotify(): SpotifyHookReturnInterface {
  const [saveRecentlyPlayedTracks] = useMutation(
    SaveRecentlyPlayedTracksDocument
  );
  const [refreshSpotifyAccessToken] = useMutation(
    RefreshSpotifyAccessTokenDocument
  );

  const refreshAccessToken = async () => {
    const refreshToken = await AsyncStorage.getItem("spotify:refreshToken");

    console.log(refreshToken);
    const refreshTokenResponse = await refreshSpotifyAccessToken({
      variables: {
        input: {
          refreshToken,
        },
      },
    });

    console.log("refreshed");
    console.log(refreshTokenResponse);

    if (!refreshTokenResponse || refreshTokenResponse.errors) {
      console.log("refreshTokenResponse error");
      // Deal with API error
      return;
    }

    const {
      data: {
        refreshSpotifyAccessToken: { accessToken },
      },
    } = refreshTokenResponse;

    await AsyncStorage.setItem("spotify:accessToken", accessToken);
  };

  const saveSpotifyTracks = async () => {
    const dateString = getTodayDateString();

    const accessToken = await AsyncStorage.getItem("spotify:accessToken");
    const refreshToken = await AsyncStorage.getItem("spotify:refreshToken");

    try {
      await saveRecentlyPlayedTracks({
        variables: {
          input: {
            accessToken,
            refreshToken,
            dateString,
          },
        },
      });
    } catch (error) {
      console.log(error.message);
      console.error(error);
    }
  };

  return {
    refreshAccessToken,
    saveSpotifyTracks,
  };
}
