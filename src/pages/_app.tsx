import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { useStore } from "../store/store";
import "../styles/_reset.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />  
    </Provider>
  )
}

export default MyApp