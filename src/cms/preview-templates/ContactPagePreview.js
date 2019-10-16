import React from "react";
import ContactPageLayout from "../../templates/contact-page";

const ContactPagePreview = ({ entry }) => (
  <ContactPageLayout data={entry.get("data")} />
);

export default ContactPagePreview;