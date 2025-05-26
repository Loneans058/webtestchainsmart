import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import { ParallaxProvider } from "react-scroll-parallax";

const Contact = lazy(() => import("../../components/ContactForm"));
const VideoPlayer = lazy(() => import("../../components/VideoPlayer"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <VideoPlayer
        url="vid/blockchain.mp4"
        overlayText1="Protecting Your Data Through 
Decentralization"
        overlayText2="ChainSmart Platform"
        overlayImage="img/svg/developer.svg"
      />
      <ParallaxProvider>
        <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.content}
        section={IntroContent.section}
        icon="Dashboard.png"
        id="intro"
      />
      </ParallaxProvider>
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <Contact
        // title={ContactContent.title}
        // content={ContactContent.text}
        // id="contact"
      />
    </Container>
  );
};

export default Home;
