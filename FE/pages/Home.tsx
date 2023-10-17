import styled from "styled-components";
import { useRouter } from "next/router";
import DefaultButton from "../components/UI/Button";
import DefaultIconStyle from "../styles/DefaultIconStyle";

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

const FirstEnteredBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  gap: 10px;
`;

const FirstEnteredText = styled.span`
  font-size: 16px;
  color: #444;
  transition: all 0.3s ease;
`;

const FirstEnteredButton = styled.button`
  font-size: 16px;
  color: var(--main-color);
  transition: all 0.3s ease;
  &:hover {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  gap: 15px;
`;

const kakaoLoginStyle = {
  height: "100%",
  color: "var(--sub-text-b)",
  backgroundColor: "#FEE500",
};

const defaultLoginStyle = {
  height: "100%",
  backgroundColor: "#FF6847",
};

const Home = () => {
  const router = useRouter();
  return (
    <>
      <MainDiv>
        <MainTitleImg src={"/assets/images/MainTitle.svg"} />
        <SubTitleText>
          로그인 후, 나를 좋아하는 사람이
          <br />
          누군지 알아보세요
        </SubTitleText>
        <ButtonBox>
          <DefaultButton
            label={"이메일로 로그인"}
            styleOverrides={defaultLoginStyle}
            onClick={() => {
              router.push("/Login");
            }}
          />
          <DefaultButton
            label={"카카오로 로그인"}
            styleOverrides={kakaoLoginStyle}
            icon={
              <DefaultIconStyle src={"/assets/images/icon-kakao_logo.png"} />
            }
            onClick={() => {
              router.push("/Login");
            }}
          />
        </ButtonBox>
        <FirstEnteredBox>
          <FirstEnteredText>처음 방문하셨나요?</FirstEnteredText>
          <FirstEnteredButton
            onClick={() => {
              router.push("/Join");
            }}
          >
            회원가입하기
          </FirstEnteredButton>
        </FirstEnteredBox>
      </MainDiv>
    </>
  );
};

export default Home;
