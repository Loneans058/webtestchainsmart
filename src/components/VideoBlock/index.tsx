import { withTranslation, TFunction } from "react-i18next";
import {
  VideoBlockSection,
  GridContainer,
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
    date: "11 Jun 2025",
    title: "ChainSmart Launches SmartShield v1.1 with New Data Viewer Feature",
    content:
      "ChainSmart launched the SmartShield Data Integrity System with version 1.1 and added the feature of DataViewer.",
    image: "/smartshield-bg.jpg",
  },
  {
    date: "10 Jun 2025",
    title: "SmartShield delivers data integrity through decentralization",
    content:
      "SmartShield developed by ChainSmart is a blockchain-based data integrity service that serves as a secure digital vault for critical information.",
    image: "/blockchain-bg.jpg",
  },
  {
    date: "05 Jun 2025",
    title: "ChainSmart partners with major tech firms",
    content:
      "New partnerships announced to expand blockchain adoption in enterprise solutions.",
    image: "/partnership-bg.jpg",
  },
  {
    date: "01 Jun 2025",
    title: "SmartShield security audit completed",
    content:
      "Independent security audit confirms SmartShield's robust protection mechanisms.",
    image: "/security-bg.jpg",
  },
];

const VideoBlock = ({ title, content, t }: VideoBlockProps) => {
  return (
    <VideoBlockSection>
      <GridContainer>
        {news.map((item, index) => (
          <NewsCardItem key={index} item={item} index={index} />
        ))}
      </GridContainer>
    </VideoBlockSection>
  );
};

export default withTranslation()(VideoBlock);
