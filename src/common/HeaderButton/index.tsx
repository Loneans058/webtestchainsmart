import { StyledButton } from "./styles";
import { HeaderButtonProps } from "../types";

export const HeaderButton = ({ color, children, onClick }: HeaderButtonProps) => (
  <StyledButton color={color} onClick={onClick}>
    {children}
  </StyledButton>
);
