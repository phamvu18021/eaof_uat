/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/next-script-for-ga */
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend&display=swap"
          rel="stylesheet"
        />

        <script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `
            var timeoutID; 
            setTimeout(function() {
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P8BRHTZ');
            }, 6000);
            
            timeoutID = setTimeout(function() {}, 6000);
            clearTimeout(timeoutID); 
            
            `
          }}
        />
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P8BRHTZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Main />
        <NextScript />
        <script src="https://2p.sambala.net/formio/static/src/js/set_cookie.js"></script>
      </body>
    </Html>
  );
}
