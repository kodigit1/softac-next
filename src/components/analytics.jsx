import Script from "next/script";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CONSENT_EVENT, getConsent } from "../utils/consent";

const GA_MEASUREMENT_ID = "G-1M6PLNK575";
const META_PIXEL_ID = "1269168935100575";

// Loads Google Analytics 4 and the Meta Pixel only after the user accepts cookies.
// Mounted once in _app so it persists across client-side navigations.
const Analytics = () => {
  const router = useRouter();
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    setAccepted(getConsent() === "accepted");
    const onChange = (e) => setAccepted(e.detail === "accepted");
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  // GA4 tracks SPA page changes via Enhanced Measurement (browser history events);
  // the Meta Pixel needs an explicit PageView on each route change.
  useEffect(() => {
    if (!accepted) return;
    const handleRouteChange = () => {
      if (window.fbq) window.fbq("track", "PageView");
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [accepted, router.events]);

  if (!accepted) return null;

  return (
    <>
      <Script
        id="ga4-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied'
          });
          gtag('consent', 'update', {
            ad_storage: 'granted',
            ad_user_data: 'granted',
            ad_personalization: 'granted',
            analytics_storage: 'granted'
          });
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>

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
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
    </>
  );
};

export default Analytics;
