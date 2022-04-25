import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import "./index.css";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={<div>loading...</div>}>
        <App />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>
);
