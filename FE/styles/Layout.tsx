import { ReactNode } from "react";
import styled from "styled-components";

const MainLayout = styled.main`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = ({ children }: { children: ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};
export default Layout;
