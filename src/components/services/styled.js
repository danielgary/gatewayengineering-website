import styled from "styled-components";
import serviceBackgroundImage from "../../../static/img/black-background_00313351.jpg";

const ServiceImageWrapper = styled.div`
  width: 100%;
  padding-bottom: 40px;
  border-bottom: 2px solid black;
  > img {
    width: 100%;
  }
`;
const ServicesOuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const ServicesHeaderInnerWrapper = styled.div`
  background-image: url(${serviceBackgroundImage});
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #f5f5f5;
`;
const ServicesInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 88%;
  max-width: 1200px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ServicesHeaderDiv = styled.div`
  padding: 150px 0;
  color: #fff;
  width: 88%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    padding: 120px 0 60px;
  }
`;
const ServicesHeader = styled.div`
  font-size: 48px;
  @media (max-width: 768px) {
    font-size: 38px;
  }
`;
const ServicesSalesPitch = styled.div`
  font-size: 28px;
  width: 75%;
  @media (max-width: 768px) {
    font-size: 20px;
    width: 100%;
    line-height: 1.4;
  }
`;
const ServicesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 100px 0;
  width: 100%;
`;
const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const ContactButton = styled.button`
  margin-top: 70px;
  width: 150px;
  background-color: #285bc9;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  padding: 15px;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background-color: #4070be;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;
const ServiceName = styled.h2`
  font-size: 30px;
  font-weight: 700;
`;
const ServiceDescription = styled.p`
  margin-top: 30px;
  @media (max-width: 768px) {
    line-height: 1.4;
  }
`;
const IconSpan = styled.span`
  cursor: pointer;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  text-align: center;
  transition: all 0.5s ease;
  > svg {
    color: #b7b7b7;
    width: 2em !important;
    height: 3em;
  }
  &[data-collapsed="true"] {
    transform: rotate(180deg);
  }
`;
const ServiceNameAndIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ServiceMainContent = styled.div`
  max-height: 1000px;
  padding-top: 20px;
  transition: all 1s ease;
  &[data-collapsed="true"] {
    max-height: 0px;
    overflow: hidden;
    opacity: 0;
    transition: all 0.4s ease;
  }
`;

export {
  ServiceImageWrapper,
  ServicesOuterWrapper,
  ServicesInnerWrapper,
  ServicesHeaderInnerWrapper,
  ServicesHeaderDiv,
  ServicesHeader,
  ServicesSalesPitch,
  ServicesList,
  ServiceWrapper,
  ContactButton,
  ServiceName,
  ServiceDescription,
  IconSpan,
  ServiceNameAndIcon,
  ServiceMainContent
};
