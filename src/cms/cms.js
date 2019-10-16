import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ServicesPagePreview from "./preview-templates/ServicesPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import HeaderPreview from "./preview-templates/HeaderPreview";
import FooterPreview from "./preview-templates/FooterPreview";
import HeroSectionPreview from "./preview-templates/HeroSectionPreview";
import MainContentPreview from "./preview-templates/MainContentPreview";
import ContactPagePreview from './preview-templates/ContactPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("services", ServicesPagePreview);
CMS.registerPreviewTemplate('contact', ContactPagePreview);
CMS.registerPreviewTemplate("header", HeaderPreview);
CMS.registerPreviewTemplate("footer", FooterPreview);
CMS.registerPreviewTemplate("heroSection", HeroSectionPreview);
CMS.registerPreviewTemplate("mainContentSection", MainContentPreview);
