import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";
import { CreateUserPayload, CreateUserResponse, User } from "../types/types";

export const useUserApi = () => {
  const createUser = async (payload: CreateUserPayload): Promise<User> => {
    const response = await axios.post<CreateUserResponse>(
      "http://localhost:3000/api/users",
      payload
    );
    return response.data.data;
  };

  const {
    mutate: createUserMutation,
    isPending: isCreatingUser,
    isError: isCreateError,
    isSuccess: isCreateSuccess,
    data: createdUser,
  } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      toast.success("User created successfully");
    },
    onError: (error) => {
      console.error("Error creating user:", error);
    },
  });

  return {
    createUser: createUserMutation,
    isCreatingUser,
    isCreateError,
    isCreateSuccess,
    createdUser,
  };
};
