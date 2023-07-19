import { Routes, Route } from "react-router-dom";
import { Home, SigninPage,  SignupPage, NotFound } from "./pages";
import { ProtectedRoute } from "./components";

function App() {
  return (
    <Routes>
        <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/sign-in" element={<SigninPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
