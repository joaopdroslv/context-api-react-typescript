import { ProductsPage } from "./pages/ProductsPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ROUTES } from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.PRODUCTS} element={<ProductsPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
