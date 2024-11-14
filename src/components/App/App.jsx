import "./App.css";
import SharedLayout from "../SharedLayout/SharedLayout";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/HomePage";
import Catalog from "../../pages/Catalog/Catalog";
import Details from "../../pages/Datails/Details";
import NotFound from "../../pages/NotFound/NotFound";
function App() {
  return (
    <Suspense fallback={<p>1</p>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
