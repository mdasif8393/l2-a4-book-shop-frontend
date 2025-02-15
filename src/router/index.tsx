import AboutUs from "@/components/About.Ustsx/AboutUs";
import SignIn from "@/components/Authentication/SignIn";
import SignUp from "@/components/Authentication/SignUp";
import Cart from "@/components/Cart/Cart";
import Checkout from "@/components/Checkout/Checkout";
import Dashboard from "@/components/Dashboard/Dashboard";
import Home from "@/components/Home/Home";
import MainLayout from "@/components/layouts/MainLayout";
import NotFound from "@/components/NotFound/NotFound";
import OrderManagements from "@/components/OrderManagement/OrderManagements";
import ProductManagement from "@/components/ProductManagement/ProductManagement";
import ProductDetails from "@/components/Products/ProductDetails";
import Products from "@/components/Products/Products";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import Success from "@/components/Success/Success";
import UserManagements from "@/components/UserManagement/UserManagements";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      //   {
      //     path: "product/:productId",
      //     element: <SingleProduct />,
      //   },
      {
        path: "product-management",
        element: (
          <ProtectedRoute>
            <ProductManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: "order-management",
        element: (
          <ProtectedRoute>
            <OrderManagements />
          </ProtectedRoute>
        ),
      },
      {
        path: "user-management",
        element: (
          <ProtectedRoute>
            <UserManagements />
          </ProtectedRoute>
        ),
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product/:productId",
        element: <ProductDetails />,
      },
      {
        path: "checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "success",
        element: <Success />,
      },
      //   {
      //     path: "category-products/:category",
      //     element: <CategoryProducts />,
      //   },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
