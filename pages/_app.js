import React from "react";
import { IntlProvider } from "react-intl";
import messages from "../components/messages.json";
import { Provider, useSelector } from "react-redux";
import store from "../reducers/store";
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ReduxIntlProvider>
          <Component {...pageProps} />
      </ReduxIntlProvider>
    </Provider>
  );
}

//Setup traductor with json who depends of locale value
const ReduxIntlProvider = ({ children }) => {
  const locale = useSelector((state) => state.language.value);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
};

export default MyApp;
