export interface User {
  id: number;
  loginId: string;
  name: string;
  email: string;
  age: number;
  part: string;
}

export type UserSummary = Pick<User, "id" | "name" | "part">;

export type UserUpdateRequest = Pick<User, "name" | "email" | "age">;

interface BaseResponse<T> {
  success: boolean;
  status: number;
  message: string;
  code: string;
  data?: T;
  meta?: {
    path: string;
    timestamp: string;
  };
}

export type UserResponse = BaseResponse<User>;
export type UserListResponse = BaseResponse<{
  users: UserSummary[];
}>;
