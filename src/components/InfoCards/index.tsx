import React from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const cardWrapper: React.CSSProperties = {
  display: "flex",
  bottom: "40vh",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  padding: "4rem 1rem",
  background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #e0e8ff 100%)",
};

const cardStyle: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.3)",
  backdropFilter: "blur(20px)",
  borderRadius: "1rem",
  padding: "2rem",
  width: "300px",
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
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
};

const descriptionStyle: React.CSSProperties = {
  fontSize: "0.95rem",
  lineHeight: 1.5,
  color: "#444",
};

const Card: React.FC<CardProps> = ({ image, title, description }) => (
  <div style={cardStyle}>
    <img src={image} alt={title} style={imageStyle} />
    <div style={titleStyle}>{title}</div>
    <div style={descriptionStyle}>{description}</div>
  </div>
);

const InfoCards: React.FC = () => {
  return (
    <div style={cardWrapper}>
      <Card
        image="img/svg/notes.svg"
        title="With Blockchain, there is no single point of failure."
        description="All information written to a blockchain is permanent – it cannot be deleted or altered."
      />
      <Card
        image="img/svg/notes.svg"
        title="Permanent, Authorized and Verified"
        description="Ensuring data integrity for your mission critical information by delivering security, traceability and trust."
      />
    </div>
  );
};

export default InfoCards;
