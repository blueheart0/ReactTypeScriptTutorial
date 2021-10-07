import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createCache from "@emotion/cache";
import React from "react";
import { Locales } from "../../../locales";

interface EmotionProviderProps {
  children?: React.ReactNode;
}

let cacheRtl: EmotionCache;
let key: string = "muirtl";
if (Locales.Languages.direction === "rtl") {
  // @ts-ignore
  cacheRtl = createCache({
    key: key,
    stylisPlugins: [rtlPlugin]
  });
} else {
  cacheRtl = createCache({
    key: key
  });
}

const EmotionProvider = (
  props: EmotionProviderProps
): React.ReactElement<EmotionProviderProps> => {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
};
export default EmotionProvider;
