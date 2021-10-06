import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import { FirstLoading } from "components";
import Root from "Root";
import { Locales } from "locales";

const dir: string = Locales.Languages.direction;
Locales.Languages.direction = dir;

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<FirstLoading msg={"Preparing"} />}>
      <Root />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

