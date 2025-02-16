/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useGetAllUsersQuery,
  useUpdateUserInfoMutation,
} from "@/redux/features/auth/authApi";
import { useAppSelector } from "@/redux/hooks";
import Spinner from "@/utils/Spinner";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const UserProfile = () => {
  const { data, isLoading } = useGetAllUsersQuery(undefined);
  const user = useAppSelector((state) => state.auth.user);

  const userInfo = data?.data?.result?.find(
    (singleUser: any) => singleUser?.email === user?.email
  );

  const [updateUser] = useUpdateUserInfoMutation();

  const { register, handleSubmit } = useForm<any>();
  const onSubmit: SubmitHandler<any> = (data) => {
    const options = {
      id: userInfo?._id,
      data: data,
    };
    updateUser(options);
    toast.success("user is updated successfully");
  };

  // Second Form Hook for update password
  const { register: registerForm2, handleSubmit: handleSubmitForm2 } =
    useForm();

  const onSubmitForm2 = async (data: any) => {
    if (userInfo?.password !== data?.oldPassword) {
      toast.error("Password doesn't matched. Try again");
    } else {
      const options = {
        id: userInfo?._id,
        data: { password: data?.newPassword },
      };
      updateUser(options);
      toast.success("Password is updated successfully");
    }
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Table>
      <TableCaption>Information of {userInfo?.name}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">{userInfo?.name}</TableCell>
          <TableCell>{userInfo?.email}</TableCell>

          <TableCell>
            <Sheet>
              <SheetTrigger>
                <Button className="bg-slate-600 ms-1">Update</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    Update Information of {userInfo?.name}
                  </SheetTitle>
                  <SheetDescription>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Label htmlFor="title">User Name</Label>
                      <Input
                        type="text"
                        placeholder="User Name"
                        id="name"
                        defaultValue={userInfo?.name}
                        {...register("name")}
                      />
                      <Label htmlFor="title">User Email</Label>
                      <Input
                        type="email"
                        placeholder="User Email"
                        id="email"
                        defaultValue={userInfo?.email}
                        {...register("email")}
                      />
                      <Label htmlFor="title">User Role</Label>
                      <Input
                        type="text"
                        placeholder="User Role"
                        id="role"
                        defaultValue={userInfo?.role}
                        disabled
                      />
                      <br />
                      <Button type="submit" className="w-full">
                        Update User Info
                      </Button>
                    </form>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
            <Sheet>
              <SheetTrigger>
                <Button className="bg-slate-600 ms-1">Update Password</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Update Password of {userInfo?.name}</SheetTitle>
                  <SheetDescription>
                    <form onSubmit={handleSubmitForm2(onSubmitForm2)}>
                      <Label htmlFor="oldPassword">Old password</Label>
                      <Input
                        type="password"
                        placeholder="Enter Your Old Password"
                        id="oldPassword"
                        {...registerForm2("oldPassword")}
                      />
                      <Label htmlFor="title">New Password</Label>
                      <Input
                        type="password"
                        placeholder="Enter a new password"
                        id="newPassword"
                        {...registerForm2("newPassword")}
                      />

                      <br />
                      <Button type="submit" className="w-full">
                        Update Password
                      </Button>
                    </form>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default UserProfile;
