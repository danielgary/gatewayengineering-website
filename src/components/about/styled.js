import styled from "styled-components";

const OuterAboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
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
  border-top: 1.5px solid #000;
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

export {
  AboutHeaderText,
  AboutSubText,
  AboutImageDiv,
  AboutBody,
  OuterAboutWrapper,
  InnerAboutWrapper
};
