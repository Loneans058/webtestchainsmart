import { useState, useEffect } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { HeaderButton } from "../../common/HeaderButton";
import { Dropdown } from "antd";
import i18n from "i18next";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

   const handleChange = (language: string) => {
      i18n.changeLanguage(language);
    };

    useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 0);       // For sticky shadow effect
      setIsHidden(scrollY > 500);     // For fade-out after 500px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <Row align="middle" gutter={16} style={{ flexWrap: "nowrap" }}>
        <Col>
          <LanguageSwitchContainer style={{ position: "relative", top: "-5px" }}>
            <LanguageSwitch>
              <Dropdown
                menu={{
                  items: [
                    { key: "en", label: "🇺🇸 English" },
                    { key: "es", label: "🇮🇩 Indonesia" },
                  ],
                  selectable: true,
                  selectedKeys: [i18n.language],
                  onClick: ({ key }) => handleChange(key),
                }}
                trigger={['click']}
              >
                <HeaderButton>
                  {i18n.language === "en" ? "🇺🇸 English" : "🇮🇩 Indonesia"}
                </HeaderButton>
              </Dropdown>
            </LanguageSwitch>
          </LanguageSwitchContainer>
        </Col>
        <Col>
          <CustomNavLinkSmall onClick={() => scrollTo("intro")}>
        <Span>{t("Product")}</Span>
          </CustomNavLinkSmall>
        </Col>
        <Col>
          <CustomNavLinkSmall
        style={{ width: "180px" }}
        onClick={() => {
          window.location.href = "mailto:hello@chainsmart.id";
          setVisibility(false);
        }}
          >
        <Span>
          <Button>{t("Contact")}</Button>
        </Span>
          </CustomNavLinkSmall>
        </Col>
      </Row>
    );
  };

  return (
    <HeaderSection  style={{
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(8px)",
        borderRadius: "18px",
        boxShadow: isSticky
          ? "0 8px 32px rgba(0,0,0,0.18)"
          : "0 4px 24px rgba(0,0,0,0.09)",
        margin: "16px",
        padding: "0 8px",
        position: "sticky",
        top: "16px",
        zIndex: 1000,
        transition: "box-shadow 0.3s, opacity 0.4s ease, transform 0.4s ease",
        opacity: isHidden ? 0 : 1,
        transform: isHidden ? "translateY(-20px)" : "translateY(0)",
        pointerEvents: isHidden ? "none" : "auto",
      }}
      className={`sticky-header ${isSticky ? 'sticky' : ''}`}>
      <Container>
      <Row justify="space-between">
        <LogoContainer to="/" aria-label="homepage">
        <SvgIcon src="logos.png" width="240px" height="40px" />
        </LogoContainer>
        <NotHidden>
        <MenuItem />
        </NotHidden>
        <Burger onClick={toggleButton}>
        <Outline />
        </Burger>
      </Row>
      <Drawer closable={false} open={visible} onClose={toggleButton}>
        <Col style={{ marginBottom: "2.5rem" }}>
        <Label onClick={toggleButton}>
          <Col span={12}>
          <Menu>Menu</Menu>
          </Col>
          <Col span={12}>
          <Outline />
          </Col>
        </Label>
        </Col>
        <MenuItem />
      </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
