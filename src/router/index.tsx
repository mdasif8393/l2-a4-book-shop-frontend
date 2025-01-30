import AboutUs from "@/components/About.Ustsx/AboutUs";
import SignIn from "@/components/Authentication/SignIn";
import SignUp from "@/components/Authentication/SignUp";
import Cart from "@/components/Cart/Cart";
import Checkout from "@/components/Checkout/Checkout";
import Home from "@/components/Home/Home";
import MainLayout from "@/components/layouts/MainLayout";
import NotFound from "@/components/NotFound/NotFound";
import OrderManagements from "@/components/OrderManagement/OrderManagements";
import ProductManagement from "@/components/ProductManagement/ProductManagement";
import ProductDetails from "@/components/Products/ProductDetails";
import Products from "@/components/Products/Products";
import Success from "@/components/Success/Success";
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
        element: <ProductManagement />,
      },
      {
        path: "order-management",
        element: <OrderManagements />,
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
        element: <Checkout />,
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
