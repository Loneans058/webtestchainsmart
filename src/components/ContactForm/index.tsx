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

// Container for the rotating image and overlay
const ImageContainer = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  margin: 0 auto;
`;

const RotatingImage = styled.img`
  width: 100%;
  height: 100%;
  animation: ${rotate} 15s linear infinite;
`;

// Overlay image that sits on top
const OverlayImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 130px; /* adjust size as needed */
  height: 100px;
  z-index: 2;
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
            <ImageContainer>
              <RotatingImage src="/img/svg/torats.png" alt="Rotating Loader" />
              <OverlayImage src="/img/svg/ss4.png" alt="Overlay" />
            </ImageContainer>
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
          </div>
        </Col>
      </Row>

      {/* New background section */}
      <div
        style={{
          backgroundImage: `url('/img/svg/vault.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          padding: "2rem",
          paddingBottom: "4rem",
        }}
      >
        <div>
          <p style={{ fontSize: "1rem", color: "#00d8ff", marginBottom: "0.5rem" }}>With Smartshield</p>
          <h2 style={{ fontSize: "2rem", fontWeight: "600", color: "#fff", marginBottom: "1rem" }}>
            You can think of SmartShield as a digital vault in which you can safely lock away a copy of your most valuable information.
          </h2>
        </div>
      </div>
    </Container>
  );
};

export default withTranslation()(KnowMore);