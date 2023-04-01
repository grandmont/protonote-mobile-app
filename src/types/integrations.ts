export interface IntegrationProps {
  hasIntegration: boolean;
  onStart?: () => void;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export interface DeezerItemInterface {
  id: number;
  title: string;
  link: string;
  artist: {
    name: string;
  };
  album: {
    cover: string;
  };
}
