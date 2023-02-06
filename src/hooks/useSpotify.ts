import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SPOTIFY_API_URL } from "../config/constants";
import useInterval from "./useInterval";
import { useMutation } from "@apollo/client";
import { RefreshSpotifyAccessTokenDocument } from "../graphql/generated";

type SpotifyItemType = {
  id: string;
  external_urls: {
    spotify: string;
  };
  name: string;
};

export type PlaybackStateType = {
  progress_ms: number;
  item: {
    album: {
      artists: {
        id: string;
        name: string;
      }[];
      images: {
        height: 640 | 300 | 64;
        url: string;
        width: 640 | 300 | 64;
      }[];
      release_date: string;
    } & SpotifyItemType;
  } & SpotifyItemType;
};

interface SpotifyHookReturnInterface {
  playbackState: PlaybackStateType;
  fetchPlaybackState: () => Promise<void>;
}

const SPOTIFY_REQUEST_INTERVAL = 5000;

export default function useSpotify(): SpotifyHookReturnInterface {
  const [playbackState, setPlaybackState] = useState<PlaybackStateType | null>(
    null
  );

  const [refreshSpotifyAccessToken] = useMutation(
    RefreshSpotifyAccessTokenDocument
  );

  const refreshAccessToken = async () => {
    const refreshToken = await AsyncStorage.getItem("spotify:refreshToken");

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

  const getPlaybackState = async () => {
    const accessToken = await AsyncStorage.getItem("spotify:accessToken");

    if (!accessToken) return null;

    try {
      const response = await fetch(`${SPOTIFY_API_URL}/me/player`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 204) return null;

      const data = await response.json();

      // Refresh accessToken
      if (data.error?.status === 401) {
        console.log(data.error.message);
        await refreshAccessToken();

        return null;
      }

      if (data.error) return null;

      return data;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };

  const getRecentlyPlayedTracks = async () => {
    const accessToken = await AsyncStorage.getItem("spotify:accessToken");

    if (!accessToken) return null;

    try {
      const response = await fetch(
        `${SPOTIFY_API_URL}/me/player/recently-played`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const data = await response.json();

      console.log(data);

      if (data.error) return null;

      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const fetchPlaybackState = async () => {
    console.log("fetchPlaybackState");
    const data = await getPlaybackState();

    if (!data) return;

    setPlaybackState(data);
  };

  // Runs every SPOTIFY_REQUEST_INTERVAL
  useInterval(fetchPlaybackState, SPOTIFY_REQUEST_INTERVAL);

  return {
    playbackState,
    fetchPlaybackState,
  };
}
