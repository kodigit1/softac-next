import React from "react";
import SEO from "../common/seo";
import HomeThree from "../components/homes/home-3";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Kodigit Beauty - gestione appuntamenti per Centri Estetici e Hair Stylist"} />
      <HomeThree />
    </Wrapper>
  );
};

export default index;
