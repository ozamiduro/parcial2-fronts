import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import Loader from "./components/Loader";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { User } from "./entities/User";
import { AuthContext } from "./providers";
import { getCookies } from "./utils/Cookies";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorBoundary from "./components/Error";
import CartPage from "./pages/Cart";
import Test from "./pages/Test";
import CartProvider from "./providers/Cart";

const ProfilePage = lazy(() => import("./pages/Profile"));
const Products = lazy(() => import("./pages/Products"));
const AddProduct = lazy(() => import("./pages/AddProduct"));

const App = () => {
  const [auth, setAuth] = useState<User | undefined>(undefined);

  useEffect(() => {
    const authCookies = getCookies("auth");
    if (authCookies) {
      setAuth(authCookies);
    }
  }, []);

  const AuthProvider = () => {
    return (
      <AuthContext.Provider value={{ auth, setAuth }}>
        <Outlet />
      </AuthContext.Provider>
    );
  };

  const IsAuthenticated = () => {
    if (auth) {
      return <Outlet />;
    }
  };

  return (
    <>
      <NavBar />
      <div
        className="p-4"
        style={{ backgroundColor: "#e7e5e5", minHeight: "calc(100vh - 50px)" }}
      >
        <Routes>
          <Route element={IsAuthenticated()}>
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
          </Route>
          <Route element={<AuthProvider />}>
            <Route
              path={"/test"}
              element={
                <ErrorBoundary>
                  <Suspense fallback={<Loader />}>
                    <Test />
                  </Suspense>
                </ErrorBoundary>
              }
            />
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
              path={"/cart"}
              element={
                <ErrorBoundary>
                  <Suspense fallback={<Loader />}>
                    <CartPage />
                  </Suspense>
                </ErrorBoundary>
              }
            />
          </Route>
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
          <Route
            path={"/profile"}
            element={
              <ErrorBoundary>
                <Suspense fallback={<Loader />}>
                  <ProfilePage />
                </Suspense>
              </ErrorBoundary>
            }
          />
        </Routes>
      </div>
    </>
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
);
