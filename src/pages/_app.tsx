import "../styles/global.css";
import "../styles/app.scss";

import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      touch-action="pan-x pan-y"
      theme={{
        token: {
          colorPrimary: "#EC3237",
          colorFillSecondary: "#3E4095",
          fontFamily: "Public Sans, sans-serif",
        },
      }}
    >
      <StyleProvider hashPriority="high">
        <Component {...pageProps} />
      </StyleProvider>
    </ConfigProvider>
  );
}

export default MyApp;
