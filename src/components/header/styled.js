import styled from "styled-components";

const HeaderOuterWrapper = styled.div`
  height: 130px;
`;
const HeaderWrapper = styled.div`
  width: 100%;
  border-bottom: 2px solid #000;
  position: fixed;
  background-color: #fff;
  opacity: 0.8;
  z-index: 10;
  height: 130px;
  &[data-expanded="true"] {
    border-bottom: none;
  }
`;
const ImageAndLinkWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr auto;
  align-items: center;
  padding: 20px;
  @media (max-width: 1026px) {
    grid-template-columns: 0.9fr auto;
  }
  @media (max-width: 880px) {
    grid-template-columns: 1fr auto;
  }
`;
const ImageWrapper = styled.div`
  width: 500px;
  @media (max-width: 824px) {
    width: 300px;
  }
  @media (max-width: 410px) {
    width: 240px;
  }
  > img {
    width: 100%;
  }
`;
const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    grid-column-start: 1;
    grid-row: 2;
    grid-column-end: 3;
    height: auto;
    flex-direction: column;
    align-items: center;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: all 0.3s ease;
    &[data-expanded="true"] {
      max-height: 35vh;
      opacity: 1;
      overflow: hidden;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
`;
const NavigationLink = styled.div`
  padding: 0 20px;
  @media (max-width: 768px) {
    padding: 20px;
  }
  > a {
    text-decoration: none;
    font-weight: 500;
    color: #040481;
    font-size: 20px;
    @media (max-width: 1000px) {
      font-size: 18px;
    }
    &:hover {
      color: #c27a75;
    }
  }
`;
const NavigationMenuToggle = styled.i`
  font-size: 30px;
  color: #000;
  width: 2.25em;
  height: 1.25em;
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: block;
    justify-self: end;
  }
`;

export {
  HeaderOuterWrapper,
  HeaderWrapper,
  ImageAndLinkWrapper,
  ImageWrapper,
  NavigationWrapper,
  NavigationLink,
  NavigationMenuToggle
};
