import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import { Configuracao } from "./paginas/Configuracao";

function App() {
  <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Configuracao />} />
      </Routes>
    </RecoilRoot>
  </BrowserRouter>;
}

export default App;
