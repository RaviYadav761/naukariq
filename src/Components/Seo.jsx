import { Helmet } from "react-helmet-async";

const Seo = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogType = "website",
  ogImage = "https://naukriq.me/og-image.svg",
  twitterCard = "summary_large_image",
  author = "NaukriQ",
}) => {
  const pageTitle = title ? (title.includes("NaukriQ") ? title : `${title} | NaukriQ`) : "NaukriQ";
  const pageCanonical = canonical || "https://naukriq.me/";

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1" />
      <link rel="canonical" href={pageCanonical} />

      <meta property="og:title" content={ogTitle || pageTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={pageCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="NaukriQ" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle || pageTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@naukriq" />
    </Helmet>
  );
};

export default Seo;
