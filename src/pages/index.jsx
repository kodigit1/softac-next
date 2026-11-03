import React from "react";
import SEO from "../common/seo";
import HomeThree from "../components/homes/home-3";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle={"Agenda appuntamenti per centri estetici e parrucchieri"}
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Kodigit Beauty",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: "https://kodigit-beauty.com/",
          description:
            "Software di gestione appuntamenti per centri estetici e parrucchieri con notifiche email e SMS, pacchetti promozionali e appuntamenti ricorrenti.",
          inLanguage: "it",
          publisher: { "@type": "Organization", name: "Kodigit", url: "https://kodigit.agency", email: "info@kodigit.agency" },
        }}
      />
      <HomeThree />
    </Wrapper>
  );
};

export default Home;
