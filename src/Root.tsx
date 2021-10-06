import React from "react";
import App from "./App";
import { Provider } from "./provider";


const Root: React.FC = () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};

export default Root;
