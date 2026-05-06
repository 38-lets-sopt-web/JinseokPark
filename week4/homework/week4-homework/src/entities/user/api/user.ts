import { client } from "../../../shared/api/client";
import type {
  UserResponse,
  UserListResponse,
  UserUpdateRequest,
} from "../model/types";

export const getMyProfile = async (userId: number): Promise<UserResponse> => {
  const { data } = await client.get<UserResponse>(`/users/${userId}`);
  return data;
};

export const getUserList = async (): Promise<UserListResponse> => {
  const { data } = await client.get<UserListResponse>("/users");
  return data;
};

export const patchMyProfile = async (
  userId: number,
  updateData: UserUpdateRequest,
): Promise<UserResponse> => {
  const { data } = await client.patch<UserResponse>(
    `/users/${userId}`,
    updateData,
  );
  return data;
};
