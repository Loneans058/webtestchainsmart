import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

const FooterWrapper = styled.footer`
  background-color: #3366e0;
  padding: 4rem 1rem 1rem;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  color: #000;
`;

const FooterContent = styled.div`
  background-color: white;
  border-radius: 2.5rem;
  padding: 4rem 2rem 2rem;
  max-width: 1430px;
  margin: 0 auto;
`;

const Logo = styled.img`
  max-width: 160px;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
`;

const Text = styled.div`
  font-size: 0.95rem;
  line-height: 1.6;
`;

const Email = styled.a`
  font-size: 0.95rem;
  color: #000;
  text-decoration: underline;
  display: inline-block;
  margin-top: 1.5rem;
`;

const SocialLink = styled.a`
  display: block;
  font-size: 0.95rem;
  color: #000;
  text-decoration: underline;
  margin-bottom: 0.5rem;
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  border: 1px solid black;
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  font-weight: 500;
  font-size: 0.95rem;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  span {
    margin-left: 0.5rem;
    font-size: 1.1rem;
  }
`;

const PartnerLogo = styled.img`
  max-width: 230px;
  margin-top: 1.2rem;
`;

const BottomText = styled.div`
  text-align: right;
  margin-top: 3rem;
  font-size: 0.85rem;
  color: #000;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={6}>
            <Logo src="img/svg/logos.png" alt="ChainSmart Logo" />
            <Text>We're Partner with</Text>
            <PartnerLogo src="img/svg/huawei.png" alt="Huawei Cloud Partner" />
          </Col>

          <Col xs={24} md={6}>
            <SectionTitle>LOCATION</SectionTitle>
            <Text>Gedung Griya Intan</Text>
            <Text>Warung Jati Barat / No. 21B</Text>
            <Text>Jakarta 12510</Text>
            <Email href="mailto:hello@chainsmart.id">hello@chainsmart.id</Email>
          </Col>

          <Col xs={24} md={6}>
            <SectionTitle>SOCIAL</SectionTitle>
            <SocialLink href="#">Linkedin</SocialLink>
            <SocialLink href="#">X (Twitter)</SocialLink>
            <SocialLink href="#">Youtube</SocialLink>
          </Col>

          <Col xs={24} md={6}>
            <SectionTitle>STAY CONNECTED</SectionTitle>
            <Text>Get the latest news & updates</Text>
            <div style={{ marginTop: "1rem" }}>
              <ContactButton href="#">
                Contact Us <span>→</span>
              </ContactButton>
            </div>
          </Col>
        </Row>

        <BottomText>
          © 2025. PT. Rantai Data Pintar - ChainSmart
        </BottomText>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
