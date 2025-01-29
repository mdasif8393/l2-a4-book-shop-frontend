import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

const Navbar = () => {
  // const { products } = useAppSelector((state) => state.cart);
  const user = useAppSelector((state) => state.auth.user);

  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logout());
    toast.success("User logged out successfully");
  };
  return (
    <div className="flex items-center justify-center bg-gray-900 h-24">
      <NavigationMenu>
        <Link to="/">
          <div className="flex items-center justify-center mx-2">
            <img
              src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAyL3Zwcm9qZWN0MjkxYmF0Y2gyMi1udW5vb24tMDktYm9va3Nob3BfMS5wbmc.png"
              alt=""
              className="w-14"
            />
            <h4 className="text-xl font-bold text-white ml-2">Gym Tools</h4>
          </div>
        </Link>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Link to="/">Home</Link>
            </NavigationMenuLink>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Link to="/products">Products</Link>
            </NavigationMenuLink>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Link to="/about">About US</Link>
            </NavigationMenuLink>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Link to="/product-management">Product Management</Link>
            </NavigationMenuLink>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Link to="/checkout">Checkout</Link>
            </NavigationMenuLink>
            {!user && (
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Link to="/signIn">Sign In</Link>
              </NavigationMenuLink>
            )}
            {!user && (
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Link to="/signUp">Sign Up</Link>
              </NavigationMenuLink>
            )}
            {user && (
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <button onClick={handleLogOut}>LogOut</button>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        </NavigationMenuList>
        <Link to="/cart">
          <div className="h-10 w-12 rounded  bg-gray-100 flex justify-center items-center hover:bg-slate-300">
            <div className="relative py-2">
              <div className="t-0 absolute left-3">
                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                  {/* {products?.length} */}
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="file: mt-4 h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </div>
        </Link>
        {user && (
          <p className="text-white font-bold ml-2">Welcome {user?.name}</p>
        )}
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
