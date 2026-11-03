import React from "react";
import SEO from "../common/seo";
import Project from "../components/project";
import Wrapper from "../layout/wrapper";

const indx = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle={"Funzionalità del gestionale per centri estetici"}
        description="Scopri le funzionalità di Kodigit Beauty: agenda online, promemoria email e SMS, pacchetti promozionali, appuntamenti ricorrenti e gestione clienti."
        path="/project"
      />
      <Project />
    </Wrapper>
  );
};

export default indx;
