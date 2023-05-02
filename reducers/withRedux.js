import React from "react";
import { Provider } from "react-redux";
import makeStore from "./store";

const withRedux = (PageComponent) => {
  const WithRedux = ({ initialReduxState, ...props }) => {
    const store = makeStore(initialReduxState);

    return (
      <Provider store={store}>
        <PageComponent {...props} />
      </Provider>
    );
  };

  if (PageComponent.getInitialProps) {
    WithRedux.getInitialProps = async (ctx) => {
      const reduxStore = makeStore();

      ctx.reduxStore = reduxStore;

      const pageProps = await PageComponent.getInitialProps(ctx);

      return { ...pageProps, initialReduxState: reduxStore.getState() };
    };
  }

  return WithRedux;
};

export default withRedux;
