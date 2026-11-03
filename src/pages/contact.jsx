import React from "react";
import SEO from "../common/seo";
import Contact from "../components/contact";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle={"Contatti"}
        description="Contatta Kodigit Beauty per una consulenza commerciale o tecnica sul software di gestione appuntamenti per centri estetici e parrucchieri."
        path="/contact"
      />
      <Contact />
    </Wrapper>
  );
};

export default index;
