import Script from "next/script";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// internal
import ScrollToTop from "../hooks/scroll-to-top";
import { animationCreate } from "../utils/utils";
import GdprBanner from "../components/gdpr-banner";

gsap.registerPlugin(ScrollTrigger);

const Wrapper = ({ children }) => {
  useEffect(() => {
    animationCreate();
  }, []);

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '990399433529725');
          fbq('track', 'PageView');
        `}
      </Script>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=990399433529725&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      {children}
      <ScrollToTop />
      <GdprBanner />
    </>
  );
};

export default Wrapper;
