import { withTranslation, TFunction } from "react-i18next";
import {
  VideoBlockSection,
  GridContainer,
  HeroTitle
} from "./styles";
import NewsCardItem from "./NewsCardItem"; // 👈 Create this new component below

interface VideoBlockProps {
  title: string;
  content: string;
  button?: string;
  t: TFunction;
}

const news = [
  {
    title: "ChainSmart Launches SmartShield v1.1 with New Data Viewer Feature",
    content:
      "ChainSmart launched the SmartShield Data Integrity System with version 1.1 and added the feature of DataViewer.",
    image: "/img/svg/2.jpg",
    linkUrl: "https://www.youtube.com/watch?v=I_Uaka30GUI" // Added link URL
  },
  {
    title: "SmartShield Data Integrity System Launch v1.0",
    content:
      "ChainSmart launches the SmartShield Data Integrity System representing the culmination of over two years of enhancements to ChainSmart’s original blockchain based data integrity engine",
    image: "/img/svg/image2.jpg",
    linkUrl: "https://www.youtube.com/watch?v=IFkj2zV8RX4" // Added link URL
  },
  {
    title: "Discussion : SmartShield delivers data integrity through decentralization",
    content:
      "SmartShield, developed by ChainSmart, is a blockchain-based data integrity service that serves as a secure digital vault for critical information",
    image: "/img/svg/image3.jpg",
    linkUrl: "https://www.youtube.com/watch?v=x6NRDt4qVTM" // Added link URL
  },
  {
    title: "SmartShield Data Integrity System",
    content:
      "Think of SmartShield as a digital vault in which you can safely lock away a copy of your most valuable information. It delivers protection for your data through the power of decentalization.",
    image: "/img/svg/image1.jpg",
    linkUrl: "https://www.youtube.com/watch?v=QEYgz4iK1A8" // Added link URL
  },
];

const VideoBlock = ({}: VideoBlockProps) => {
  return (
    <> 
    <HeroTitle>
        Discover the power of blockchain with SmartShield! Our ChainSmart technology enables seamless transactions and enhances security for your operations. 
      </HeroTitle>
      <VideoBlockSection>
     
      <GridContainer style={{ marginTop: "10rem" }}>
        {news.map((item, index) => (
          <NewsCardItem key={index} item={item} index={index} />
        ))}
      </GridContainer>
    </VideoBlockSection>
      </>
    
  );
};

export default withTranslation()(VideoBlock);
