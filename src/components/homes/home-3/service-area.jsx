import service_data from '@/src/data/service-data';
import Link from 'next/link';
import React from 'react';

import service_img_1 from "../../../../public/assets/img/service/sv-icon-3-1.png";
import service_img_2 from "../../../../public/assets/img/service/service-shape-3-1.png";
import Image from 'next/image';

const service_content = {
   title: <>Gestione degli appuntamenti <br />in cloud <span>Semplice e intuitiva.</span></>,
   btn_text: <>Tutti i Servizi</>,

   bg_img: "/assets/img/service/service-3-bg.png",
   service_title: "CRM Management",
   service_info: <>Prenotazioni online, Gestione appuntamenti per offerte pacchetto, gestione appuntamenti ricorrenti <br /> notifiche prenotazioni ai clienti vie email-sms</>,
}
const {title, btn_text, bg_img, service_title, service_info}  = service_content


const  ServiceArea = () => {
    return (
        <>
            <div className="tp-service-area pb-90 z-index">
               <div className="container">

                  <div className="row">
                     <div className="col-xl-12">
                        <div className="tp-service-section-wrapper mb-60 d-flex justify-content-between align-items-end">
                           <h3 className="tp-section-title-3 wow tpfadeLeft" 
                           data-wow-duration=".9s" 
                           data-wow-delay=".3s"
                           >
                              {title}
                           </h3>
                           <Link className="tp-btn-blue-lg tp-btn-hover mb-10 alt-color-black wow tpfadeRight" 
                           data-wow-duration=".9s" 
                           data-wow-delay=".5s" href="/project"
                           >
                              <span>{btn_text}</span>
                              <b></b>
                           </Link>
                        </div>
                     </div>
                  </div>

                  <div className="row">
                     <div className="col-xl-8 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-service-3-item mb-30 p-relative z-index"
                         style={{backgroundImage: `url(${bg_img})`}}>
                           <div className="tp-service-3-icon">
                              <Image src={service_img_1} alt="theme-pure" />
                           </div>
                           <div className="tp-service-3-content">
                              <span>{service_title}</span>
                              <h4 className="tp-service-3-title-sm">
                                 <Link href="/project">
                                    {service_info}
                                 </Link></h4>
                           </div>
                           <div className="tp-service-3-btn">
                              <Link className="tp-btn-white-solid" href="/project">Tutti i servizi</Link>
                           </div>
                           <div className="tp-service-3-shape">
                              <Image src={service_img_2} alt="theme-pure" />
                           </div>
                        </div>
                     </div>

                     {service_data.slice(5, 9).map((item, i)  => 
                        <div key={i} className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between">
                           <div className="tp-service-sm-icon">
                              {item.icon} 
                           </div>
                           <div className="tp-service-sm-content">
                              <span>{item.title}</span>
                              <h3 className="tp-service-sm-title"><Link href="/project">{item.description} </Link></h3>
                              <div className="tp-service-sm-link">
                                 <Link href="/project">Tutti i Servizi <i className="far fa-arrow-right"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                        )
                     }
                  </div>
               </div>
            </div>
        </>
    );
};

export default ServiceArea;
