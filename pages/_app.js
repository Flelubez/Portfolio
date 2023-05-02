import React from "react";
import { IntlProvider } from "react-intl";
import messages from "../components/messages.json";
import { Provider, useSelector } from "react-redux";
import store from "../reducers/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ReduxIntlProvider>
        <Component {...pageProps} />
      </ReduxIntlProvider>
    </Provider>
  );
}

const ReduxIntlProvider = ({ children }) => {
  const locale = useSelector((state) => state.language.value);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
};

export default MyApp;
