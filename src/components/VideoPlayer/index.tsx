import React from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

interface VideoPlayerProps {
  url: string;
  width?: string;
  height?: string;
  playing?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  overlayText1?: string;
  overlayText2?: string;
  overlayImage?: string;
}

const wrapperStyle: React.CSSProperties = {
  position: 'relative',
  paddingTop: '66.66%', // 3:2 aspect ratio (larger than 16:9)
  width: '100%',
};

const playerStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

const overlayContainerStyle: React.CSSProperties = {
  position: 'absolute',
  top: '10%',
  left: '50%',
  transform: 'translateX(-50%)',
  textAlign: 'center',
  color: 'white',
  zIndex: 2,
};

const overlayText1Style: React.CSSProperties = {
  fontSize: '2.5rem',
  fontWeight: 700,
  margin: '0.5rem 0',
  textShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
};

const overlayText2Style: React.CSSProperties = {
  fontSize: '1.6rem',
  fontWeight: 500,
  margin: '0.5rem 0',
  textShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
};

const overlayImageStyle: React.CSSProperties = {
  marginTop: '6rem',
  width: '160px',
  height: 'auto',
};

const fadeVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 1.2, duration: 3.2 },
  }),
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  url,
  width = '100%',
  height = '100%',
  playing = true,
  controls = true,
  loop = false,
  muted = true,
  overlayText1,
  overlayText2,
  overlayImage,
}) => {
  return (
    <div style={wrapperStyle}>
      <div style={playerStyle}>
        <ReactPlayer
          url={url}
          width={width}
          height={height}
          playing={playing}
          controls={controls}
          loop={loop}
          muted={muted}
        />
      </div>

      {(overlayText1 || overlayText2 || overlayImage) && (
        <div style={overlayContainerStyle}>
          {overlayText1 && (
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeVariant}
              style={overlayText1Style}
            >
              {overlayText1}
            </motion.div>
          )}
          {overlayText2 && (
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeVariant}
              style={overlayText2Style}
            >
              {overlayText2}
            </motion.div>
          )}
          {overlayImage && (
            <motion.img
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeVariant}
              src={overlayImage}
              alt="Overlay"
              style={overlayImageStyle}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
