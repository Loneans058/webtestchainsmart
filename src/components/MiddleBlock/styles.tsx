import styled from "styled-components";

export const MiddleBlockSection = styled.section`
  position: relative;
  width: 100%;
  padding: 80px 0;
  background: #fff;
`;

export const StickyWrapper = styled.div`
  position: sticky;
  top: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: #fff;
  z-index: 10;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
`;

export const LeftContent = styled.div`
  padding-right: 40px;
`;

export const SectionTitle = styled.h1`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #1a1a1a;
  line-height: 1.2;
`;

export const SectionSubtitle = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 0;
`;

export const RightContent = styled.div`
  position: relative;
  height: 100%;
`;

export const NewsContainer = styled.div`
  position: relative;
  height: 500px;
`;

export const NewsCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 40px;
  width: 100%;
  color: #1a1a1a;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid #eee;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const NewsDate = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
  font-weight: 500;
`;

export const NewsTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.3;
  color: #1a1a1a;
`;

export const NewsContent = styled.p`
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 24px;
  color: #444;
  flex-grow: 1;
`;

export const NewsIndicator = styled.div`
  font-size: 14px;
  color: #888;
  font-weight: 500;
  padding-top: 24px;
  border-top: 1px solid #eee;
`;