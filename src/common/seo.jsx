import Head from "next/head";

export const SITE_URL = "https://kodigit-beauty.com";
export const SITE_NAME = "Kodigit Beauty";
const DEFAULT_DESCRIPTION =
  "Agenda appuntamenti online per centri estetici e parrucchieri: prenotazioni, promemoria via email e SMS, pacchetti promozionali e appuntamenti ricorrenti.";
const DEFAULT_IMAGE = "/assets/img/logo/KODIGIT2022-BLACK-1.png";

const SEO = ({
  pageTitle,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_IMAGE,
  noindex = false,
  jsonLd,
}) => {
  const title = pageTitle ? `${pageTitle} | ${SITE_NAME}` : SITE_NAME;
  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {!noindex && <link rel="canonical" href={url} />}
      <link rel="icon" href="/favicon.png" />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="it_IT" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
};

export default SEO;
