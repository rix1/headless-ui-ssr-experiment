import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

setTimeout(() => {
  ReactDOM.hydrateRoot(
    document.getElementById("app"),
    <>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
  );
  let root = document.documentElement;

  root.style.setProperty("--hydration-color", "lightsalmon");
}, 4000);
