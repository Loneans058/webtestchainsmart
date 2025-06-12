import { useState, useEffect, useRef } from "react";
import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  MiddleBlockSection,
  StickyWrapper,
  NewsContainer,
  NewsDate,
  NewsTitle,
  NewsContent,
  NewsIndicator,
  ContentWrapper,
  LeftContent,
  RightContent,
  NewsCard,
  SectionTitle,
  SectionSubtitle
} from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  button?: string;
  t: TFunction;
}

const news = [
  {
    date: "17 Nov 2019",
    title: "Proof of Concept for Supply Chain, Automation and Finance",
    content:
      "Indonesia is an Enabling Environment for Digital Commerce. Recent joint market research by Google, Temask and Bain & Company indicates extraordinary growth for the digital economy in Indonesia between now and 2025. The digital economy has quadrupled in Indonesia from $10 billion in 2015 to $40 billion in 2019 and is expected to be greater than $130 billion by 2025...",
  },
  {
    date: "22 July 2021",
    title: "Increasing Business Activity Benefitting from Blockchain Technology",
    content:
      "Indonesia is an Enabling Environment for Digital Commerce.Blockchain can provide enormous benefit to Indonesia. An opinion piece by Paul Brisk, Co-founder and Director of ChainSmart. The article describes third generation blockchain and how this innovation can provide benefit to Indonesia when it comes to financial inclusion through lowering the cost of participation.",
  },
  {
    date: "20 Mar 2021",
    title: "Digital Identity Pilot",
    content:
      "Pilot project launched to validate digital IDs for rural supply chain actors...",
  },
  {
    date: "15 May 2021",
    title: "Partnership with Major Retail Chain",
    content:
      "Announced strategic partnership with Indonesia's largest retail chain to implement blockchain tracking...",
  },
  {
    date: "30 Jul 2021",
    title: "Series A Funding Round Closed",
    content:
      "Successfully closed $25M Series A funding round led by Sequoia Capital Southeast Asia...",
  },
  {
    date: "12 Sep 2021",
    title: "Expansion to Vietnam Market",
    content:
      "Launched operations in Vietnam with local partnerships in agriculture supply chain...",
  },
  {
    date: "05 Nov 2021",
    title: "Blockchain Certification Achieved",
    content:
      "Received ISO/TC 307 certification for blockchain implementation standards compliance...",
  },
  {
    date: "18 Jan 2022",
    title: "Mobile App Release",
    content:
      "Released mobile application for small farmers to access supply chain network...",
  },
  {
    date: "22 Mar 2022",
    title: "Government Collaboration",
    content:
      "Signed MoU with Ministry of Trade for nationwide digital trade platform...",
  },
  {
    date: "14 Jun 2022",
    title: "Sustainability Initiative",
    content:
      "Launched carbon footprint tracking feature for all supply chain participants...",
  },
  {
    date: "29 Aug 2022",
    title: "AI Integration Beta",
    content:
      "Beta release of AI-powered demand forecasting for supply chain optimization...",
  },
  {
    date: "10 Oct 2022",
    title: "User Milestone Reached",
    content:
      "Platform surpassed 50,000 active users across Southeast Asia region...",
  },
  {
    date: "05 Dec 2022",
    title: "International Expansion",
    content:
      "Announced plans to expand operations to Thailand and Philippines in Q1 2023...",
  },
  {
    date: "20 Feb 2023",
    title: "Technology Upgrade",
    content:
      "Completed migration to more scalable blockchain infrastructure with zero downtime...",
  },
  {
    date: "08 Apr 2023",
    title: "Enterprise Solution Launch",
    content:
      "Released enterprise version with advanced analytics and reporting features...",
  },
];

const MiddleBlock = ({ title, content, t }: MiddleBlockProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollLock = useRef(false);
  const lastScrollTime = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (!containerRef.current) return;
      
      const isInsideNewsContainer = e.target instanceof Node && 
                                 containerRef.current.contains(e.target);
      
      const now = Date.now();
      if ((scrollLock.current || now - lastScrollTime.current < 800) && !isInsideNewsContainer) {
        return;
      }

      const scrollDirection = Math.sign(e.deltaY);
      if (scrollDirection === 0) return;

      lastScrollTime.current = now;
      scrollLock.current = true;

      let newIndex = activeIndex + scrollDirection;
      newIndex = Math.max(0, Math.min(newIndex, news.length - 1));

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
        if (isInsideNewsContainer) {
          e.preventDefault();
        }
      }

      setTimeout(() => {
        scrollLock.current = false;
      }, 800);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [activeIndex]);

  const getCardColor = (index: number) => {
    const colors = ['#1a365d', '#2d3748', '#1a1a1a']; // Dark blue, dark grey, black
    return colors[index % colors.length];
  };

  return (
    <MiddleBlockSection>
      <StickyWrapper ref={ref}>
        <ContentWrapper>
          <Row justify="space-between" align="top" gutter={[48, 32]}>
            <Col xl={10} lg={10} md={24} sm={24} xs={24}>
              <LeftContent style={{ paddingTop: '40px' }}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={controls}
                  variants={{
                    visible: { 
                      opacity: 1, 
                      transition: { 
                        duration: 0.8,
                        ease: "easeOut"
                      } 
                    },
                  }}
                >
                  <SectionTitle style={{ textAlign: 'left' }}>
                    All the news from <br />
                    ChainSmart
                  </SectionTitle>
                  <SectionSubtitle style={{ 
                    textAlign: 'left',  // Left-aligned subtitle
                    marginTop: '16px',  // Reduced space between title and subtitle
                    maxWidth: '90%'     // Prevent subtitle from stretching too far
                  }}>
                    Stay updated with our latest announcements, launches,
                    <br />
                    developments and innovations.
                  </SectionSubtitle>
                </motion.div>
              </LeftContent>
            </Col>

            <Col xl={12} lg={12} md={24} sm={24} xs={24}>
              <RightContent ref={containerRef}>
                <NewsContainer>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <NewsCard style={{ 
                        backgroundColor: getCardColor(activeIndex),
                        color: '#ffffff',
                        width: '600px',
                        height: '500px',
                      }}>
                        <NewsDate style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{news[activeIndex].date}</NewsDate>
                        <NewsTitle style={{ color: '#ffffff' }}>{news[activeIndex].title}</NewsTitle>
                        <NewsContent style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{news[activeIndex].content}</NewsContent>
                        <NewsIndicator style={{ 
                          color: 'rgba(255, 255, 255, 0.7)',
                          borderTop: '1px solid rgba(255, 255, 255, 0.2)'
                        }}>
                          {activeIndex + 1} / {news.length}
                        </NewsIndicator>
                      </NewsCard>
                    </motion.div>
                  </AnimatePresence>
                </NewsContainer>
              </RightContent>
            </Col>
          </Row>
        </ContentWrapper>
      </StickyWrapper>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);