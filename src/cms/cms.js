import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";

CMS.registerPreviewStyle("../layouts/all.sass");
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
