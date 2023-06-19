import { Route, Routes } from "react-router-dom";
import { Dashboard, Home } from "./Pages";
import { styles } from "./style/styles";
import { LogoFull } from "./image";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
