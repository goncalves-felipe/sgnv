import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Stock } from "./pages/Stock/Stock";
import { Header } from "./shared/components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/stock"
            element={
              <>
                <Header />
                <Stock />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
      <BrowserRouter></BrowserRouter>
    </>
  );
}

export default App;
