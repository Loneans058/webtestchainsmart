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

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const wrapperStyle: React.CSSProperties = {
  position: 'relative',
  paddingTop: '66.66%',
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

const cardStyle: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.3)",
  backdropFilter: "blur(20px)",
  borderRadius: "1rem",
  padding: "2rem",
  width: "260px",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  color: "#333",
  textAlign: "left",
};

const imageStyle: React.CSSProperties = {
  width: "80px",
  height: "80px",
  objectFit: "contain",
  marginBottom: "1rem",
};

const titleStyle: React.CSSProperties = {
  fontSize: "0.9rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
};

const descriptionStyle: React.CSSProperties = {
  fontSize: "0.6rem",
  lineHeight: 1.5,
  color: "#444",
};

const playerWithCardsStyle: React.CSSProperties = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  height: "100%",
  width: "100%",
  gap: "2rem",
};

const cardLeftRightWrapper: React.CSSProperties = {
  position: "absolute",
  bottom: "-10px",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  padding: "0 2rem",
  zIndex: 3,
};

const Card: React.FC<CardProps> = ({ image, title, description }) => (
  <div style={cardStyle}>
    <img src={image} alt={title} style={imageStyle} />
    <div style={titleStyle}>{title}</div>
    <div style={descriptionStyle}>{description}</div>
  </div>
);

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  url,
  width = '100%',
  height = '100%',
  playing = true,
  controls = false,
  loop = true,
  muted = true,
  overlayText1,
  overlayText2,
  overlayImage,
}) => {
  return (
    <div style={wrapperStyle}>
      <div style={playerStyle}>
        <div style={playerWithCardsStyle}>
          <ReactPlayer
            url={url}
            width={width}
            height={height}
            playing={playing}
            controls={controls}
            loop={loop}
            muted={muted}
          />
          <div style={cardLeftRightWrapper}>
            <Card
              image="img/svg/notes.svg"
              title="​With Blockchain, there is no single point of failure."
              description="All information written to a blockchain is permanent – it cannot be deleted or altered."
            />
            <Card
              image="img/svg/notes.svg"
              title="Permanent, Authorized and Verified"
              description="Ensuring data integrity for your mission critical information by delivering security, traceability and trust."
            />
          </div>
        </div>
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

      <div
  style={{
    position: "absolute",
    top: "125vh",
    width: "100%",
    height: "500px",
    background: "radial-gradient(ellipse at center, rgba(0,123,255,0.3) 0%, rgba(0,123,255,0.05) 60%, transparent 100%)",
    zIndex: 0,
  }}
/>
    </div>
  );
};

export default VideoPlayer;
