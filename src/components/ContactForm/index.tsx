import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(135deg, #e0edff 0%, #f9fbff 100%);
  text-align: center;
  
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
      <Row align="middle" justify="center" gutter={[48, 48]}>
        <Col xs={24} md={12}>
          <RingImage src="/img/svg/your-ring-graphic.png" alt="Ring graphic" />
        </Col>
        <Col xs={24} md={12}>
          <Title>Want to know more</Title>
          <ImageBox>
            <LogoImage src="/img/svg/lock-graphic.png" alt="Lock graphic" />
          </ImageBox>
        </Col>
      </Row>
      <p style={{ fontSize: "1.25rem", color: "#2a50da", marginTop: "2rem" }}>
        Contact us at <strong>ChainSmart</strong> to learn how
      </p>
    </Container>
  );
};

export default withTranslation()(KnowMore);
