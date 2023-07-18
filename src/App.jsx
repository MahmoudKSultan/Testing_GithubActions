import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SigninPage,  SignupPage, NotFound } from "./pages";
import { ProtectedRoute } from "./components";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/sign-in" element={<SigninPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
