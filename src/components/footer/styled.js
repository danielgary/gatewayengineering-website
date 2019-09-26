import styled from "styled-components";

const NavigationLink = styled.div`
  padding: 20px 0;
  /* @media (max-width: 768px) {
    padding: 20px;
  } */
  > a {
    text-decoration: none;
    color: #040481;
    font-size: 20px;
    @media (max-width: 1000px) {
      font-size: 18px;
    }
    &:hover {
      color: #28bafd;
    }
  }
`;

export { NavigationLink };
