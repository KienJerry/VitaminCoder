import Document, { Head, Html, Main, NextScript } from "next/document";

import { AppConfig } from "@/utils/AppConfig";

class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <meta charSet="UTF-8" key="charset" />
          <meta
            name="keywords"
            key="keywords"
            content={`${AppConfig.keywords}`}
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="robots"
            content="index, follow , max-snippet:-1, max-video-preview:-1, max-image-preview:large"
          />
          <title>{AppConfig.title}</title>
          <meta name="title" content={`${AppConfig.title}`} />
          <link href={`${AppConfig.url}`} rel="canonical" />
          <link rel="preconnect" href={`${AppConfig.url}`} />
          <meta name="description" content={`${AppConfig.description}`} />
          <meta property="og:title" content={`${AppConfig.title}`} />
          <meta
            property="og:description"
            content={`${AppConfig.description}`}
          />
          <meta property="og:url" content={`${AppConfig.url}`} />
          <meta
            property="og:image"
            content="https://teamsport-vendure-test.ferrari.aegona.work/assets/source/f5/caulong.png"
          />
          <meta property="og:determiner" content="the" />
          <meta property="og:locale" content="vi_VN" />
          <meta property="og:locale:alternate" content="en_US" />
          <meta property="og:locale:alternate" content="vi_VN" />
          <meta property="og:site_name" content={`${AppConfig.title}`} />
          <meta name="geo.region" content="VN" />
          <meta name="geo.placename" content="Buon Ma Thuot" />
          <meta name="geo.position" content="12.679683;108.044737" />
          <meta name="ICBM" content="12.679683, 108.044737" />
          <meta name="twitter:site" content={`${AppConfig.title}`} />
          <meta name="twitter:title" content={`${AppConfig.title}`} />
          <meta property="og:image" />
          <meta
            name="twitter:card"
            content="https://teamsport-vendure-test.ferrari.aegona.work/assets/source/f5/caulong.png"
          />
          <meta
            name="twitter:description"
            content={`${AppConfig.description}`}
          />
          <meta httpEquiv="x-ua-compatible" content="ie=edge chrome=1" />
          <meta name="revisit-after" content="1 days" />
          <meta name="google" content="nositelinkssearchbox" />
          <meta property="og:type" content="website" />
          <link
            rel="apple-touch-icon"
            href={`${AppConfig.url}/logo-url.png`}
            key="apple"
          />
          <link
            rel="icon"
            href={`${AppConfig.url}/logo-url.png`}
            key="favicon"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
