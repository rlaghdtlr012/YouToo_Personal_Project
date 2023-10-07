import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

const MainTitleImg = styled.img`
  width: 330px;
  height: 344px;
  font-size: 20px;
  margin-top: 164px;
`;

const Home = () => {
  return (
    <>
      <MainDiv>
        <MainTitleImg src={"/assets/images/MainTitle.svg"} />
      </MainDiv>
    </>
  );
};

export default Home;
