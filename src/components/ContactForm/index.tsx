import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  background: linear-gradient(105deg, #e0edff 0%, #f9fbff 120%);
  text-align: center;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Styled component with smooth rotation
const RotatingImage = styled.img`
  width: 500px; /* adjust as needed */
  height: 500px;
  animation: ${rotate} 15s linear infinite;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: #3b3b3b;
  margin-bottom: 2rem;
`;

const ImageBox = styled.div`
  background: white;
  border-radius: 1.5rem;
  padding: 1rem;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  display: inline-block;
`;

const LogoImage = styled.img`
  width: 300px;
  max-width: 100%;
`;

const RingImage = styled.img`
  width: 100%;
  max-width: 500px;
`;

const KnowMore = () => {
  return (
  <Container>
  <Row align="middle" justify="center" gutter={[48, 48]} style={{ minHeight: "100vh" }}>
    <Col xs={24} md={12}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <RotatingImage src="/img/svg/torats.png" alt="Rotating Loader" />
        <p style={{ fontSize: "1.25rem", color: "#2a50da", marginTop: "2rem" }}>
          Contact us at ChainSmart to learn how SmartShield can elevate your data security strategy today!
        </p>
        <p style={{ fontSize: "1rem", color: "#333", marginBottom: "1.5rem" }}>
           ChainSmart has designed SmartShield to be an essential tool to help organizations ensure they
are using reliable information in achieving better business outcomes. Unreliable information can lead to lost opportunities, higher costs, and lower profits.
<br />
<br />
SmartShield delivers data integrity to ensure information is always received from trusted sources, and guards against unauthorized changes to that information.
        </p>
      </div>
    </Col>
    <Col xs={24} md={12}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Title>Want to know more</Title>
        <ImageBox>
          <video
            src="vid/blockchais.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "1rem",
              maxWidth: "800px",
              maxHeight: "800px",
            }}
          />
        </ImageBox>
        <button
  style={{
    marginTop: "2rem",
    padding: "5rem 10rem",          // Big padding = physically bigger button
    fontSize: "4rem",              // Large readable text
    fontWeight: "bold",
    backgroundColor: "#2a50da",
    color: "#fff",
    border: "none",
    borderRadius: "1rem",          // Large rounded corners
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 12px 32px rgba(42, 80, 218, 0.35)",
    minWidth: "320px",             // Force it to have a wide button shape
    textAlign: "center"
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.backgroundColor = "#1d3abf";
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.backgroundColor = "#2a50da";
    e.currentTarget.style.transform = "scale(1)";
  }}
>
  Contact Us
</button>
      </div>
    </Col>
  </Row>

  {/* New background section */}
  <div
  style={{
    backgroundImage: `url('/img/svg/vault.jpg')`, // Make sure the image path is correct
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "50vh",
    display: "flex",
    alignItems: "flex-end", // Align vertically at bottom
    justifyContent: "center", // Center horizontally
    color: "#fff",
    textAlign: "center",
    padding: "2rem",
    paddingBottom: "4rem", // Push the text up a bit from the very edge
  }}
>
  <div>
    <p style={{ fontSize: "1rem", color: "#00d8ff", marginBottom: "0.5rem" }}>With Smartshield</p>
    <h2 style={{ fontSize: "2rem", fontWeight: "600", color: "#fff", marginBottom: "1rem" }}>
      Benefit from state-of-the-art security features that protect your transactions and personal information.
    </h2>
  </div>
</div>
</Container>
  );
};

export default withTranslation()(KnowMore);
