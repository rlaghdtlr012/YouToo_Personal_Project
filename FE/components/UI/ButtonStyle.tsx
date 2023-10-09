import styled from "styled-components";

export const DefaultButtonStyle = styled.button<{
  styleOverrides;
}>`
  position: relative;
  display: block;
  width: 330px;
  height: 50px;
  border-radius: 12px;
  font-size: 16px;
  background-color: var(--main-color);
  ${({ styleOverrides }) => ({ ...styleOverrides })};
`;
