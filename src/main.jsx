import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DispatchHeroGTM from "../DispatchHero_gtm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DispatchHeroGTM />
  </StrictMode>
);
