import { ReactNode } from "react";
import WrapperBox from "../components/UI/WrapperBox";
import styled from "styled-components";

const MainLayout = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MainLayout>
      <WrapperBox>{children}</WrapperBox>
    </MainLayout>
  );
};
export default Layout;
