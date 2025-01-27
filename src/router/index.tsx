import Home from "@/components/Home/Home";
import MainLayout from "@/components/layouts/MainLayout";
import NotFound from "@/components/NotFound/NotFound";
import Products from "@/components/Products/Products";
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
      //   {
      //     path: "about",
      //     element: <AboutUs />,
      //   },
      //   {
      //     path: "product/:productId",
      //     element: <SingleProduct />,
      //   },
      //   {
      //     path: "product-management",
      //     element: <ProductManagement />,
      //   },
      {
        path: "products",
        element: <Products />,
      },
      //   {
      //     path: "checkout",
      //     element: <Checkout />,
      //   },
      //   {
      //     path: "cart",
      //     element: <Cart />,
      //   },
      //   {
      //     path: "success",
      //     element: <Success />,
      //   },
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
