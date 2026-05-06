import { client } from "../../../shared/api/client";
import type {
  SignUpRequest,
  SignUpResponse,
  LoginRequest,
  LoginResponse,
} from "../model/types";

export const postSignUp = async (
  userData: SignUpRequest,
): Promise<SignUpResponse> => {
  const { data } = await client.post<SignUpResponse>("auth/signup", userData);
  return data;
};

export const postLogin = async (
  loginData: LoginRequest,
): Promise<LoginResponse> => {
  const { data } = await client.post<LoginResponse>("auth/signin", loginData);
  return data;
};
