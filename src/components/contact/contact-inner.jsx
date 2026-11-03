import Image from "next/image";
import Link from "next/link";
import React from "react";


import icon_1 from "../../../public/assets/img/contact/contact-icon-sm-1.png";


const inner_content = {
  title: "Contatti",
  description: <>Richiedi una consulenza commerciale o tecnica</>,

  contact_data: [
    {
      id: 1,
      icon: icon_1,
      title: "info@kodigit.agency",
      link: "mailto:info@kodigit.agency",
    },
  ],
};
const { title, description, contact_data } = inner_content;

const ContactInner = () => {
  return (
    <>
      <div className="contact-inner-area pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-inner-title-sm-wrap text-center mb-50">
                <h4 className="contact-inner-title-sm">{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className="contact-inner-wrapper">
            <div className="row gx-0 justify-content-center">
              {contact_data.map((item, i) => (
                <div key={i} className="col-12">
                  <div className="contact-inner-item d-flex align-items-center justify-content-center">
                    <div className="contact-inner-img contact-img-1">
                      <Image src={item.icon} alt="" />
                    </div>
                    <div className="contact-inner-link">
                      <Link href={`${item.link}`}>{item.title}</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default ContactInner;
