import "../styles/globals.css";
import type { AppProps } from "next/app";
import { nextReduxStoreWrapper } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default nextReduxStoreWrapper.withRedux(MyApp);
