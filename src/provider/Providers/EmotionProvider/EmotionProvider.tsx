import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import React from "react";
import { Locales } from "../../../locales";

interface EmotionProviderProps {
  children?: React.ReactNode;
}

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: Locales.Languages.direction === "rtl" ? [rtlPlugin] : []
});

const EmotionProvider = (
  props: EmotionProviderProps
): React.ReactElement<EmotionProviderProps> => {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
};
export default EmotionProvider;
