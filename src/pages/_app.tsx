import { type AppType } from "next/app";

import { api } from "eufs-finance/utils/api";

import "eufs-finance/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
