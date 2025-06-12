// Keep imports as-is
import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { Parallax } from "react-scroll-parallax";
import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import { ContentSection, MinTitle, MinPara, StyledRow } from "./styles";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
     <div
    style={{
      fontSize: "clamp(4rem, 10vw, 15rem)",
      fontWeight: "4000",
      letterSpacing: "1rem",
      textAlign: "center",
      marginTop: "4rem",
      marginBottom: "1rem",
      textShadow: "2px 2px 0 #000, 4px 4px 0 #555",
    }}
  >
    SmartShield
  </div>
      <div style={{ width: "100%", padding: "0 2rem", marginTop: "4rem" }}>
        <Row justify="space-between" align="middle">
          <Col xs={24} md={12}>
            <div
              style={{ textAlign: "left", fontSize: "3rem", fontWeight: 500 }}
            >
              {t("leftCornerText")}{" "}
              <span style={{ fontWeight: 700, color: "#1890ff" /* or any color */ }}>
        {t("highlightWord")}
      </span>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div
              style={{ textAlign: "left", fontSize: "1.2rem", maxWidth: 700, fontWeight: 400, padding: "3.5rem 0" }}
            >
              {t("rightCornerText")}
            </div>
          </Col>
        </Row>
      </div>
      <Parallax translateY={["0px", "200px"]}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>{t(title)}</h1>
        </div>
      </Parallax>
      <ContentSection style={{ marginTop: "18.75rem" }}>
        <Fade direction={direction} triggerOnce>
          <StyledRow justify="center" align="top" id={id} direction={direction}>
            <Col span={24}>
              <Row justify="center" gutter={[24, 64]} align="top">
                {/* Left column - 2 items */}
                <Col xs={24} md={6}>
                  <Row gutter={[0, 48]}>
                    {section?.slice(0, 2).map((item, index) => (
                      <Col key={index} span={24}>
                        <img src={item.icon} width="60" height="60" />
                        <MinTitle>{t(item.title)}</MinTitle>
                        <MinPara>{t(item.content)}</MinPara>
                      </Col>
                    ))}
                  </Row>
                </Col>

                {/* Center image */}
                <Col xs={24} md={8} style={{ textAlign: "center" }}>
                  <Parallax easing="easeOutQuad" translateY={["0px", "220px"]}>
                    <img
                      src={"img/svg/Dashboard.png"}
                      width="300"
                      height="200"
                    />
                  </Parallax>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-400px",
                      transform: "translateX(-50%)",
                      width: "400px",
                      left: "50%",
                      height: "400px",
                      backgroundImage: "url('/img/svg/mac.png')",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      zIndex: -1,
                    }}
                  />
                </Col>

                {/* Right column - 2 items */}
                <Col xs={24} md={6}>
                  <Row gutter={[0, 48]}>
                    {section?.slice(2, 4).map((item, index) => (
                      <Col key={index} span={24}>
                        <img src={item.icon} width="60" height="60" />
                        <MinTitle>{t(item.title)}</MinTitle>
                        <MinPara>{t(item.content)}</MinPara>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>

              {/* Centered below item (5th item) */}
              {section?.[4] && (
                <Row justify="center" style={{ marginTop: "64px" }}>
                  <Col xs={24} md={12} style={{ textAlign: "center" }}>
                    <img src={section[4].icon} width="60" height="60" />
                    <MinTitle>{t(section[4].title)}</MinTitle>
                    <MinPara>{t(section[4].content)}</MinPara>
                  </Col>
                </Row>
              )}
            </Col>
          </StyledRow>
        </Fade>
      </ContentSection>
    </>
  );
};

export default withTranslation()(ContentBlock);
