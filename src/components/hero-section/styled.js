import styled from "styled-components";
import heroBackgroundImage from "../../../static/img/sample-background-image-2.jpg";

const HeroBackground = styled.div`
  background-image: url(${heroBackgroundImage});
  padding: 120px 0 280px 0;
  background-position: auto;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  text-align: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
`;

const TextInnerWrapper = styled.div`
  max-width: 80%;
  width: 1200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroH1 = styled.h1`
  font-size: 58px;
  line-height: 1.3;
  margin: 0;
  @media (max-width: 500px) {
    font-size: 48px;
  }
`;

const HeroH3 = styled.h3`
  margin: 20px 0 0 0;
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export { HeroBackground, TextInnerWrapper, HeroH1, HeroH3 };
