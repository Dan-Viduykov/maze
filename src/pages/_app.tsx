import { AppProps } from "next/app";
import "../styles/_reset.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp