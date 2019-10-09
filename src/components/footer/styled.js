import styled from "styled-components";

const FooterOuterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #040481;
`;
const FooterInnerWrapper = styled.div`
  max-width: 1000px;
  width: 90%;
  padding: 20px 20px;
`;
const ContactAndLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  @media (max-width: 500px) {
    margin-bottom: 20px;
  }
`;
const ContactWrapper = styled.div`
  max-width: 40%;
  display: flex;
  flex-direction: column;
`;
const ContactUs = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  line-height: 1.2;
  margin-bottom: 5px;
`;
const ContactEmail = styled.div`
  > a {
    text-decoration: none;
    color: #28bafd;
    font-size: 20px;
    font-weight: 300;
    word-break: break-all;
    @media (max-width: 440px) {
      font-size: 18px;
    }
    &:hover {
      color: #c27a75;
    }
  }
`;
const ContactPhoneNumber = styled.p`
  margin: 0;
  color: #bdbac2;
  line-height: 1.2;
`;
const ContactStreetAddress = styled.p`
  margin: 0;
  max-width: 250px;
  color: #bdbac2;
  line-height: 1.2;
`;
const NavigationLinkwWrapper = styled.div`
  max-width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const NavigationText = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  line-height: 1.2;
  margin-bottom: 5px;
`;
const NavigationLink = styled.div`
  text-align: end;
  line-height: 1.2;
  > a {
    text-decoration: none;
    color: #28bafd;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.2;
    @media (max-width: 440px) {
      font-size: 18px;
    }
    &:hover {
      color: #c27a75;
    }
  }
`;
const FooterLogoAndCopyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Copyright = styled.p`
  margin: 0;
  color: #bdbac2;
  line-height: 1.2;
`;
const ImageWrapper = styled.div`
  width: 90px;
  height: 82px;
  margin-bottom: 20px;
  background-color: #fff;
  > img {
    width: 100%;
  }
`;

export {
  NavigationLink,
  FooterOuterWrapper,
  FooterInnerWrapper,
  ContactAndLinkWrapper,
  ContactWrapper,
  ContactUs,
  ContactEmail,
  ContactPhoneNumber,
  ContactStreetAddress,
  NavigationLinkwWrapper,
  NavigationText,
  FooterLogoAndCopyright,
  Copyright,
  ImageWrapper
};
