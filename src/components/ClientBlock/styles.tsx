import styled from "styled-components";
import { Row, Col } from "antd";

export const ClientBlockSection = styled("section")`
  padding: 80px 0; /* Increased padding for better spacing */
  background: #f8f8f8; /* Light background to separate from white */
  text-align: center;
  overflow: hidden; /* Ensure no overflow issues from animations */
  font-family: 'Inter', sans-serif; /* Added Inter font */
`;

export const ContentWrapper = styled("div")`
  max-width: 800px;
  margin: 0 auto 50px auto; /* Increased bottom margin for separation */
  text-align: center;
`;

export const StyledTitle = styled("h6")`
  font-size: 2.5rem; /* Larger font size for title */
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const StyledContent = styled("p")`
  font-size: 1.2rem; /* Larger font size for content */
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem; /* Increased margin for content */

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ClientsContainer = styled("div")`
  margin-top: 40px;
  display: flex;
  justify-content: center; /* Center the client logos horizontally */
  align-items: center;
  flex-wrap: wrap; /* Allow logos to wrap to the next line */
  gap: 20px; /* Gap between logos */

  .ant-row {
    width: 100%; /* Ensure row takes full width */
  }
`;

export const ClientLogoWrapper = styled("div")`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* Soft shadow */
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; /* Fixed height for consistent look */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Smooth transition */

  &:hover {
    transform: translateY(-5px); /* Slight lift on hover */
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12); /* Enhanced shadow on hover */
  }
`;

export const ImageWrapper = styled("img")`
  max-width: 80%; /* Ensure image fits within wrapper */
  max-height: 70px; /* Limit image height */
  object-fit: contain; /* Maintain aspect ratio */
  filter: grayscale(100%); /* Grayscale filter for a uniform look */
  opacity: 0.7; /* Slightly desaturated */
  transition: filter 0.3s ease-in-out, opacity 0.3s ease-in-out;

  &:hover {
    filter: grayscale(0%); /* Full color on hover */
    opacity: 1; /* Full opacity on hover */
  }
`;
