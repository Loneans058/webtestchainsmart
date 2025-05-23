import React, { useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  videoUrl: string; // Accepts either a local path or external URL
  width?: string;
  height?: string;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  autoPlayInView?: boolean; // Optional: to control autoplay behavior
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  width = "100%",
  height = "auto",
  muted = true,
  loop = true,
  controls = true,
  autoPlayInView = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!autoPlayInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [autoPlayInView]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !autoPlayInView) return;

    if (isVisible) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isVisible, autoPlayInView]);

  return (
    <video
      ref={videoRef}
      src={videoUrl}
      muted={muted}
      loop={loop}
      controls={controls}
      width={width}
      height={height}
      style={{ display: "block", borderRadius: "16px", margin: "auto" }}
    />
  );
};

export default VideoPlayer;
