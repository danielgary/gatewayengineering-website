import React, { useEffect } from "react";
import {
  Form,
  Label,
  Input,
  Textarea,
  OuterContactWrapper,
  InnerContactWrapper,
  ContactUsTitle,
  ContactUsSubText,
  FormButton
} from "./styled";

let isPreview;

const formatContactPhoneNumber = () => {
  // Auto format phone input field to (555) 555-5555
  const phoneField = document.getElementById("phoneField")
    ? document.getElementById("phoneField")
    : undefined;
  if (phoneField) {
    phoneField.addEventListener("keyup", function() {
      let phoneValue = phoneField.value;
      let output;
      phoneValue = phoneValue.replace(/[^0-9]/g, "");
      const area = phoneValue.substr(0, 3);
      const pre = phoneValue.substr(3, 3);
      const tel = phoneValue.substr(6, 4);
      if (area.length < 3) {
        output = "(" + area;
      } else if (area.length == 3 && pre.length < 3) {
        output = "(" + area + ")" + " " + pre;
      } else if (area.length == 3 && pre.length == 3) {
        output = "(" + area + ")" + " " + pre + " - " + tel;
      }
      phoneField.value = output;
    });
  }
};

export const ContactPageContent = ({ content, containsPreviewData }) => {
  isPreview = containsPreviewData;

  const pageContent = isPreview
    ? content
    : content.allMarkdownRemark.edges[0].node.frontmatter;

  const wasClicked = e => {
    e.target.setAttribute("data-wasclicked", true);
  };

  useEffect(() => {
    formatContactPhoneNumber();
  });

  return (
    <>
      <OuterContactWrapper>
        <InnerContactWrapper>
          <div>
            <ContactUsTitle>{pageContent.title}</ContactUsTitle>
            <ContactUsSubText>{pageContent.subText}</ContactUsSubText>
          </div>
          <Form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input hidden aria-hidden="true" name="bot-field" />
            <Input
              type="text"
              name="firstName"
              aria-label="First Name"
              placeholder="First Name"
              required={true}
              onBlur={e => wasClicked(e)}
            />
            <Input
              type="text"
              name="lastName"
              aria-label="Last Name"
              placeholder="Last Name"
              required={true}
              onBlur={e => wasClicked(e)}
            />
            <Input
              type="text"
              id="phoneField"
              name="phoneNumber"
              aria-label="Phone Number"
              placeholder="(555) 555 - 5555"
            />
            <Input
              type="email"
              name="emailAddress"
              aria-label="Email Address"
              placeholder="Email Address"
              required={true}
              onBlur={e => wasClicked(e)}
            />
            <Label>Brief description of services needed</Label>
            <Textarea
              type="text"
              name="message"
              placeholder="enter message text..."
              aria-label="Message Box"
              cols="100"
              rows="5"
            />
            <FormButton type="submit">Send Message</FormButton>
          </Form>
        </InnerContactWrapper>
      </OuterContactWrapper>
    </>
  );
};
