import React from "react";
import ContactPageLayout from "../../components/contact-page/contact-page-template";

const ContactPagePreview = ({ entry }) => (
  <ContactPageLayout data={entry.get("data").toJS()} />
);

export default ContactPagePreview;
