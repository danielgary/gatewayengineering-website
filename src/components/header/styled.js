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

export { HeaderWrapper, ImageAndLinkWrapper, ImageWrapper, NavigationWrapper };
