import { useState, useEffect, useRef } from "react";
import { Row, Col } from "antd";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ClientBlockSection,
  ContentWrapper,
  StyledTitle,
  StyledContent,
  ClientsContainer,
  ClientLogoWrapper,
  ImageWrapper,
} from "./styles"; // Import styled components from the separate styles file

interface ClientBlockProps {
  title: string;
  content: string;
  button?: string;
}

const clientLogos = [
  { id: 1, name: "BSG", src: "/img/svg/Client_1.png" },
  { id: 2, name: "CIMB Niaga", src: "/img/svg/Client_2.png" },
  { id: 3, name: "OJK", src: "/img/svg/Client_4.png" },
  { id: 4, name: "PermataBank", src: "/img/svg/Client_5.png" },
  { id: 5, name: "BTN", src: "/img/svg/btns.png" },
];

const ClientBlock = ({ title, content }: ClientBlockProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const logoItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <ClientBlockSection ref={ref}>
      <motion.div initial="hidden" animate={controls} variants={variants}>
        <Row justify="start" align="middle">
          <Col lg={{ span: 24 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
            <ContentWrapper>
              <StyledTitle>{title}</StyledTitle>
              <StyledContent>{content}</StyledContent>
            </ContentWrapper>
          </Col>
        </Row>
      </motion.div>

      <motion.div initial="hidden" animate={controls} variants={logoVariants}>
        <ClientsContainer>
          <Row justify="center" align="middle" gutter={[16, 16]}>
            {clientLogos.map((logo) => (
              <Col
                key={logo.id}
                lg={{ span: 4 }}
                md={{ span: 6 }}
                sm={{ span: 8 }}
                xs={{ span: 12 }}
              >
                <motion.div variants={logoItemVariants}>
                  <ClientLogoWrapper>
                    <ImageWrapper src={logo.src} alt={logo.name} />
                  </ClientLogoWrapper>
                </motion.div>
              </Col>
            ))}
          </Row>
        </ClientsContainer>
      </motion.div>
    </ClientBlockSection>
  );
};

export default ClientBlock;
