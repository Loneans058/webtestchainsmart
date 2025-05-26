import { Row } from "antd";
import styled from "styled-components";


export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
`;


export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;
export const ContentWrapper = styled.div`
  position: relative;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  z-index: 2;
  position: relative;
`;

export const MinTitle = styled.h4`
  margin-top: 1rem;
  font-size: 1.25rem;
`;

export const MinPara = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const ContentSection = styled.section`
  position: relative;
  overflow: hidden;

  .background-dot {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    opacity: 0.15;
  }

  .card {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.05);
  }
`;
