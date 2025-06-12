import styled from "styled-components";

export const VideoBlockSection = styled.section`
background: 
    /* White corners (top-left, top-right, bottom-left, bottom-right) */
    linear-gradient(to bottom right, transparent 49.5%, white 50%),
    linear-gradient(to bottom left, transparent 49.5%, white 50%),
    linear-gradient(to top right, transparent 49.5%, white 50%),
    linear-gradient(to top left, transparent 49.5%, white 50%),
    /* Central color gradient */
    linear-gradient(rgb(190, 201, 240), rgb(190, 201, 240));

  background-repeat: no-repeat;
  background-size: 50% 50%;  /* Each gradient covers a quarter */
  background-position:
    top left,     /* Position each gradient in a corner */
    top right,
    bottom left,
    bottom right;
  
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1400px;
`;

export const NewsCard = styled.div`
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const NewsImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  filter: brightness(0.6);
`;

export const NewsContent = styled.div`
  position: relative;
  color: white;
  padding: 1.5rem;
  z-index: 2;
`;

export const NewsTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
`;

export const NewsText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: white;
  line-height: 1.4;
`;

