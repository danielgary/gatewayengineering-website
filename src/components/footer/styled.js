import styled from "styled-components";

const NavigationLink = styled.div`
  > a {
    text-decoration: none;
    color: #28bafd;
    font-size: 20px;
    font-weight: 300;
    @media (max-width: 440px) {
      font-size: 18px;
    }
    &:hover {
      color: #c27a75;
    }
  }
`;
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
  margin-bottom: 50px;
`;
const ContactWrapper = styled.div`
  max-width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ContactEmail = styled.div`
  > a {
    text-decoration: none;
    color: #28bafd;
    font-size: 20px;
    font-weight: 300;
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
`;
const ContactStreetAddress = styled.p`
  margin: 0;
  max-width: 250px;
  color: #bdbac2;
`;
const NavigationLinkwWrapper = styled.div`
  max-width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const FooterLogoAndCopyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Copyright = styled.p`
  margin: 0;
  color: #bdbac2;
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
  ContactEmail,
  ContactPhoneNumber,
  ContactStreetAddress,
  NavigationLinkwWrapper,
  FooterLogoAndCopyright,
  Copyright,
  ImageWrapper
};
