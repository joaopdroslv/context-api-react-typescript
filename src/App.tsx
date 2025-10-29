import { ProductsPage } from "./pages/ProductsPage";
import { TestPage } from "./pages/TestPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ROUTES } from "./routes";
import { ToastProvider } from "./context/Toast/ToastContext";
import { ToastContainer } from "react-toastify";

export const App = () => {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.PRODUCTS} element={<ProductsPage />}></Route>
          <Route path={ROUTES.TEST} element={<TestPage />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ToastProvider>
  );
};
