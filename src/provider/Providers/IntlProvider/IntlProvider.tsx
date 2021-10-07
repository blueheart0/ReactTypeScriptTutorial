import React, { ReactElement } from "react";
import { IntlProvider as ReactIntlProvider } from "react-intl";
import { Locales } from "locales";

interface IntlProviderProps {
  children?: React.ReactNode;
}

interface IntlMessage {
  [key: string]: string;
}

const IntlProvider = (
  props: IntlProviderProps
): ReactElement<IntlProviderProps> => {
  const messages: IntlMessage = {
    test: "TESTING"
  };
  return (
    <ReactIntlProvider locale={Locales.Languages.current} messages={messages}>
      {props.children}
    </ReactIntlProvider>
  );
};
export default IntlProvider;
