import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import Loader from "./components/Loader";
import ErrorBoundary from "./components/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Register from "./pages/Register";

const Login = lazy(() => import("./pages/Login"));
const Products = lazy(() => import("./pages/Products"));
const AddProduct = lazy(() => import("./pages/AddProduct"));

const App = () => (
  <div>
    <NavBar />
    <div className="p-4">
      <Routes>
        <Route
          path={"/"}
          element={
            <ErrorBoundary>
              <Suspense fallback={<Loader />}>
                <Products />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path={"/login"}
          element={
            <ErrorBoundary>
              <Suspense fallback={<Loader />}>
                <Login />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path={"/register"}
          element={
            <ErrorBoundary>
              <Suspense fallback={<Loader />}>
                <Register />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path={"/addproduct"}
          element={
            <ErrorBoundary>
              <Suspense fallback={<Loader />}>
                <AddProduct />
              </Suspense>
            </ErrorBoundary>
          }
        />
      </Routes>
    </div>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
