import { useAppSelector } from "@/redux/hooks";
import Button from "@/utils/Button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = useAppSelector((state) => state.auth.user);
  console.log(user);
  return (
    <div className="w-[90%]">
      <h1 className="text-3xl text-center font-bold text-red-500 mt-10">
        Welcome to {user?.role} Dashboard
      </h1>
      <div className="flex justify-center items-center mt-10">
        <div>
          {user && user.role === "admin" && (
            <div>
              <Link to="/user-management">
                <Button text="Manage Users"></Button>
              </Link>
              <br />
              <br />
              <Link to="/product-management">
                <Button text="Manage Products"></Button>
              </Link>
              <br />
              <br />
              <Link to="/order-management">
                <Button text="Manage Orders"></Button>
              </Link>
            </div>
          )}
          <br />
          <br />
          {user && user.role === "user" && (
            <div>
              <Button text="View Orders"></Button>
              <br />
              <br />
              <Button text="Edit Profile"></Button>
            </div>
          )}
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
