import "../styles/global.css";
import "../styles/app.scss";

import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import * as configProvider from "@/constants/configProvider";
import config from "@/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      touch-action="pan-x pan-y"
      theme={configProvider.ConfigProvider}
    >
      <NextNProgress />
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

MyApp.getInitialProps = async (appContext: any) => {
  const initialProps = {
    data: 123,
  };

  return { pageProps: initialProps };
};

export default MyApp;
