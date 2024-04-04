import FooterThree from "@/src/layout/footers/footer-3";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";

import ContactInner from "./contact-inner";
import CtaArea from "./cta-area";
import HeroBanner from "../../common/hero-banner";


const Contact = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title_top="Get In" title_bottom="Get In" />
            <HeroBanner bg_img="/assets/img/contact/receptionist.jpg" />
            
            
            <ContactInner />
            <CtaArea />
          </main>
          <FooterThree style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default Contact;
