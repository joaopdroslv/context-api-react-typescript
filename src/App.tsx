import { ProductsPage } from "./pages/ProductsPage";
import { TestPage } from "./pages/TestPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ROUTES } from "./routes";
import { ToastProvider } from "./context/Toast/ToastContext";

export const App = () => {
  return (
    <ToastProvider>
      <Router>
        <Routes>
          <Route path={ROUTES.PRODUCTS} element={<ProductsPage />}></Route>
          <Route path={ROUTES.TEST} element={<TestPage />}></Route>
        </Routes>
      </Router>
    </ToastProvider>
  );
};
