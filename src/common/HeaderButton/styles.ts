import styled from "styled-components";

export const StyledButton = styled("button")<{ color?: string }>`
  background: ${(p) => p.color || "transparent"};
  color: ${(p) => (p.color ? "#2E186A" : "#000")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 0.1px solid #edf3f5;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #000;
  }
`;
