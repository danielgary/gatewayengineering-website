import styled from "styled-components";
import serviceBackgroundImage from "../../../static/img/black-background_00313351.jpg";

const OuterAboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const InnerAboutWrapper = styled.div`
  width: 88%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const AboutHeaderText = styled.h1`
  font-size: 48px;
  line-height: 1.3;
  font-weight: 400;
  margin: 50px 0 15px;
`;
const AboutSubText = styled.h2`
  text-align: center;
  font-size: 28px;
  line-height: 1.2;
  font-weight: 400;
  margin-top: 0px;
  padding: 20px;
  @media (max-width: 500px) {
    width: 75%;
  }
`;
const AboutImageDiv = styled.div`
  width: 100%;
  margin-top: 30px;
  > img {
    width: 100%;
  }
  > div > picture > img {
    border-radius: 12px 12px 0 0;
    @media (max-width: 768px) {
      width: 100%;
      border-radius: 0;
    }
  }
`;
const AboutBody = styled.div`
  background-color: #fff;
  padding: 40px 40px 60px;

  > h2 {
    font-weight: 600;
    margin-bottom: 5px;
    margin-top: 30px;
  }
  > p {
    margin-top: 0px;
  }
`;
const AboutHeaderWrapper = styled.div`
  background-image: url(${serviceBackgroundImage});
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const AboutHeaderInnerWrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 88%;
  max-width: 1200px;
  padding: 100px 0;
`;

export {
  AboutHeaderText,
  AboutSubText,
  AboutImageDiv,
  AboutBody,
  OuterAboutWrapper,
  InnerAboutWrapper,
  AboutHeaderWrapper,
  AboutHeaderInnerWrapper
};
