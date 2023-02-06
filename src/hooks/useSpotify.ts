import AsyncStorage from "@react-native-async-storage/async-storage";

import { SPOTIFY_API_URL } from "../config/constants";

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

      name: string;
      release_date: string;
    };

    external_urls: {
      spotify: string;
    };
    id: string;
    name: string;
  };
};

interface SpotifyHookReturnInterface {
  getPlaybackState: () => Promise<PlaybackStateType>;
}

export default function useSpotify(): SpotifyHookReturnInterface {
  const getPlaybackState = async () => {
    const accessToken = await AsyncStorage.getItem("spotify");

    if (!accessToken) return null;

    try {
      const response = await fetch(`${SPOTIFY_API_URL}/me/player`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 204) return null;

      const data = await response.json();

      if (data.error) return null;

      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return {
    getPlaybackState,
  };
}
