import React from "react";
import { EmotionProvider, ThemeProvider } from "./Providers";

const Provider = (props: any): React.ReactElement<any> => {
  return (
    <EmotionProvider>
      <ThemeProvider>{props.children}</ThemeProvider>
    </EmotionProvider>
  );
};
export default Provider;
