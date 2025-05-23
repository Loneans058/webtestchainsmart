// src/components/VideoPlayer/types.ts

export interface VideoPlayerProps {
  url: string;
  width?: string;
  height?: string;
  playing?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
}
