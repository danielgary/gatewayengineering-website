import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100%;
  border-bottom: 2px solid #000;
  position: fixed;
  background-color: #fff;
`;
const ImageAndLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const ImageWrapper = styled.div`
  > img {
    width: 500px;
    @media (max-width: 800px) {
      width: 300px;
    }
  }
`;
const NavigationWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
`;
const NavigationLink = styled.div`
  > a {
    text-decoration: none;
    color: #040481;
    font-size: 20px;
    &:hover {
      color: #28bafd;
    }
  }
`;

export {
  HeaderWrapper,
  ImageAndLinkWrapper,
  ImageWrapper,
  NavigationWrapper,
  NavigationLink
};
