// Fontes movidas para index.html com carregamento assíncrono para evitar render-blocking
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
