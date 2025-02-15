import { useBlockUserMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { TableCell, TableRow } from "../ui/table";

/* eslint-disable @typescript-eslint/no-explicit-any */
const UserManagement = ({ user }: any) => {
  const [blockUser] = useBlockUserMutation();

  const handleBlockUser = (_id: string) => {
    const confirmPronPrompt = prompt(`Write block to block  ${user?.name}`);
    if (confirmPronPrompt === "block") {
      const res = blockUser(_id);
      console.log(res);
      toast.success("User is blocked successfully");
    } else {
      toast("Wrong Input");
    }
  };

  return (
    <TableRow key={user?._id}>
      <TableCell>{user?.name}</TableCell>
      <TableCell>{user?.email}</TableCell>
      <TableCell>{user?.role}</TableCell>
      <TableCell>
        {" "}
        <p className={user?.isBlocked ? "text-red-500" : "text-green-500"}>
          {user?.isBlocked ? "blocked" : "not blocked"}
        </p>{" "}
      </TableCell>
      <TableCell>
        {/* Delete */}
        <Button
          variant="destructive"
          onClick={() => handleBlockUser(user?._id)}
        >
          Block {user?.name}
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default UserManagement;
