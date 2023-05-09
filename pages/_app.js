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
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
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

const AppWrapper = ({ children }) => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      {children}
    </div>
  );
};

export default MyApp;
