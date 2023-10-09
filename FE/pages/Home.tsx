import styled from "styled-components";
import { useRouter } from "next/router";
import DefaultButton from "../components/UI/Button";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

const MainTitleImg = styled.img`
  font-size: 30px;
`;

const SubTitleText = styled.div`
  width: 100%;
  display: block;
  position: relative;
  align-items: center;
  text-align: center;
  font-size: 20px;
  margin-top: 15px;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

const kakaoLoginStyle = {
  color: "var(--sub-text-b)",
  backgroundColor: "#FEE500",
  marginTop: "55px",
};

const defaultLoginStyle = {
  backgroundColor: "#FF6847",
};

const Home = () => {
  const router = useRouter();
  return (
    <>
      <MainDiv>
        <MainTitleImg src={"/assets/images/MainTitle.svg"} />
        <SubTitleText>
          로그인 후, 나를 좋아하는 사람이 누군지 알아보아요
        </SubTitleText>
        <ButtonBox>
          <DefaultButton
            label={"이메일로 로그인"}
            styleOverrides={defaultLoginStyle}
            onClick={() => {
              router.push("/Login");
            }}
          />
        </ButtonBox>
      </MainDiv>
    </>
  );
};

export default Home;
