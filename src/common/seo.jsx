import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} - Beauty Service Gestione appuntamenti per centri estetici e parrucchieri`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="L’agenda appuntamenti per centri estetici e parrucchieri più utilizzata in Italia" />
      <meta name="robots" content="index, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);

export default SEO;
