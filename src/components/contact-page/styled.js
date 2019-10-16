import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  align-content: center;
  padding: 60px 60px;
  margin: 40px 0;
  border-radius: 10px;
  background-color: #040481;
  @media (max-width: 500px) {
    width: 91%;
    border-radius: 0;
    padding: 10%;
    margin: 0;
  }
`;
const Label = styled.label`
  margin-top: 20px;
  color: #fff;
`;
const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  margin: 3px 0;
  border-width: 1px;
  &[data-wasclicked="true"] {
    :invalid {
      border: 1px solid red;
      background-color: #f9d2d9;
    }
  }
`;
const Textarea = styled.textarea`
  padding: 8px;
  font-size: 16px;
`;
const OuterContactWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const InnerContactWrapper = styled.div`
  width: 88%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    width: 90%;
  }
`;
const RequiredText = styled.p`
  color: #fff;
`;
const FormButton = styled.button`
  box-sizing: content-box;
  padding: 18px;
  font-size: 18px;
  width: 40%;
  margin: 40px auto 0;
  background-color: #28bafd;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  min-width: 122px;
  &:hover {
    background-color: #0280bb;
    transition: all 0.1s;
  }
  @media (max-width: 500px) {
    width: 60%;
  }
`;
const ContactUsTitle = styled.h1`
  font-size: 48px;
  text-align: center;
  font-weight: 400;
  margin-bottom: 0;
  @media (max-width: 1000px) {
    margin: 80px 0 0;
  }
`;
const ContactUsSubText = styled.h3`
  font-size: 28px;
  text-align: center;
  font-weight: 400;
  margin-top: 0;
`;

export {
  Form,
  Label,
  Input,
  Textarea,
  OuterContactWrapper,
  InnerContactWrapper,
  RequiredText,
  FormButton,
  ContactUsTitle,
  ContactUsSubText
};
