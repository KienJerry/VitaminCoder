import "../styles/global.css";
import "../styles/app.scss";

import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import config from "@/store";

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
        <Provider store={config.store}>
          <PersistGate loading={null} persistor={config.persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </StyleProvider>
    </ConfigProvider>
  );
}

export default MyApp;
