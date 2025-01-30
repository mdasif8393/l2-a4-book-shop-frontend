import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppSelector } from "../../redux/hooks";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector((state) => state.auth.token);

  if (!token) {
    toast.error("First Sign In to access your desire Page");
    return <Navigate to="/signIn" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
