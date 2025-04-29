import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add CSS variables for retro theme
document.documentElement.style.setProperty('--darkPurple', '#1D1135');
document.documentElement.style.setProperty('--neonPink', '#FF2A6D');
document.documentElement.style.setProperty('--electricBlue', '#05D9E8');
document.documentElement.style.setProperty('--cyberYellow', '#F9F871');
document.documentElement.style.setProperty('--offWhite', '#F5F5F5');

createRoot(document.getElementById("root")!).render(<App />);
