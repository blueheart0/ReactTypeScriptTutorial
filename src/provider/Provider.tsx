import React from "react";
import { EmotionProvider, IntlProvider, ThemeProvider } from "./Providers";

const Provider = (props: any): React.ReactElement<any> => {
  return (
    <IntlProvider>
      <EmotionProvider>
        <ThemeProvider>{props.children}</ThemeProvider>
      </EmotionProvider>
    </IntlProvider>
  );
};
export default Provider;
