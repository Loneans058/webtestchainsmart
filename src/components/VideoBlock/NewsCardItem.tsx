import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  NewsCard,
  NewsImage,
  NewsContent,
  NewsTitle,
  NewsText
} from "./styles";

interface NewsCardItemProps {
  item: {
    image: string;
    title: string;
    content: string;
  };
  index: number;
}

const NewsCardItem = ({ item, index }: NewsCardItemProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, inView]);

  const isOdd = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: isOdd ? 100 : 30 }}
      animate={controls}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      style={{ marginTop: isOdd ? '400px' : '0px' }}
    >
      <NewsCard>
        <NewsImage style={{ backgroundImage: `url(${item.image})` }} />
        <NewsContent>
          <NewsTitle>{item.title}</NewsTitle>
          <NewsText>{item.content}</NewsText>
        </NewsContent>
      </NewsCard>
    </motion.div>
  );
};

export default NewsCardItem;
