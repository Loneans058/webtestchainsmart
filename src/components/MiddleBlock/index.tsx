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
    date: "21 Dec 2021",
    title: "UNSRAT is the First University in Indonesia Implementing Blockchain Technology",
    content:
      "UNSRAT Uses ChainSmart Becomes the First University in Indonesia to use Blockchain.",
  },
  {
    date: "17 May 2022",
    title: "Blockchain Training from ChainSmart",
    content:
      "Press Release: UNSRAT cooperates with ChainSmart to become the first tertiary institution in Indonesia which implements the blockchain to ensure the integrity of the Academic Record.",
  },
  {
    date: "14 Jun 2022",
    title: "Blockchain Webinar Event for University with ChainSmart, Metrocom and Huawei Cloud Services",
    content:
      "ChainSmart presenting Blockchain solution for universities in Indonesia in a webinar co-hosted by Metrocom and Huawei Cloud Services on July 19, 2022.",
  },
  {
    date: "8 Feb, 2023",
    title: "Presenting Blockchain-Based Platform Kredensialku for Academic Result Verification",
    content:
      "PT Rantai Data Pintar (ChainSmart) today announced the launch in Indonesia of a blockchain based service called KredensialKu. The service uses blockchain technology to securely store verifiable proof of academic documents such as ijazah and transcripts issued by universities to graduates. Kredensialku allows graduates to prove to external parties such as potential employers, that their academic documents are genuine and have not been altered or faked.",
  },
  {
    date: "21 Feb 2023",
    title: "Huawei Cloud Service Recognise ChainSmart as Their Technology Partner to Deliver Blockchain Solution",
    content:
      "PT Rantai Data Pintar (ChainSmart) today announced that from today we are a recognised Technology Partner for Huawei Cloud Services. We build our blockchain services in the Huawei Cloud, and we are proud to work with Huawei Cloud to deliver our blockchain solutions to our customers.",
  },
  {
    date: "7 March 2023",
    title: "ChainSmart is now Registered as a member of KADIN Indonesia",
    content:
      "ChainSmart is now a registered member of the Indonesian Chamber of Commerce and Industry.(Kadin Indonesia).",
  },
  {
    date: "30 May 2024",
    title: "ChainSmart Launches SmartShield v1.0",
    content:
      "Today, ChainSmart is thrilled to announce the launch of version 1.0 of our SmartShield Data Integrity System. This product represents the culmination of over two years of enhancements to ChainSmart’s original blockchain based data integrity engine. Please refer to the launch video below, with additional information provided in the video of the launch event interview with Q&A. You may also download the Press Release",
  },
  {
    date: "14 Jun 2022",
    title: "Sustainability Initiative",
    content:
      "Launched carbon footprint tracking feature for all supply chain participants...",
  },
  {
    date: "19 July 2024",
    title: "ChainSmart Launches SmartShield v1.1 with New Data Viewer Feature",
    content:
      " Today, ChainSmart is thrilled to announce the launch of version 1.1 of our SmartShield Data Integrity System which introduces the Data Viewer feature. This significant enhancement allows an organization using SmartShield to extend data integrity to the information issued to their business partners, customers, and subsidiaries. Please refer to the launch video below, with additional information provided in the video of the launch event interview with Q&A.You may also download the Press Release",
  },
  {
    date: "2 Aug 2024",
    title: "ChainSmart Launches SmartShield v2.0 with New Web Verification",
    content:
      "Today, ChainSmart is excited to announce the launch of version 2.0 of our SmartShield Data Integrity System which introduces the Web Verification API feature. When an organization uses SmartShield to ensure the integrity of digital information, and then issues that information to an external audience, the new Web Verification API allows the organization to establish a website where external parties can upload the digital content to be verified by SmartShield. Published content can be confirmed by the external audience as genuine, from the trusted issuer, and has not suffered unauthorized changes. Please refer to the launch video below, with additional information provided in the video of the launch event interview with Q&A. You may also download the Press Release",
  },
  {
    date: "15 Oct 2024",
    title: "SmartShield: Your Secure Data Vault in the Cloud",
    content:
      "ChainSmart has developed a blockchain-based data integrity service called SmartShield. Think of SmartShield as a secure digital vault for your mission-critical information.The Need for a Second Level of Defence While you may have implemented various protection systems and processes to safeguard your central datastore, experience shows that first-level defences will inevitably be breached. This begs the question: what is your second level of defence? How do you quickly recover from an attack?",
  }
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