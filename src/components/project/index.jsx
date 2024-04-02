import BreadcrumbSeven from "@/src/common/breadcrumbs/breadcrumb-7";
import FooterThree from "@/src/layout/footers/footer-3";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import CtaArea from "../contact/cta-area";
import Portfolio from "./portfolio";

const Project = () => {
  return (
    <>
      <HeaderSix style_2={true} />
      <main>
        <BreadcrumbSeven />
        <Portfolio />
        <CtaArea />
      </main>
      <FooterThree style_contact={true}  style_team={true} />
    </>
  );
};

export default Project;
