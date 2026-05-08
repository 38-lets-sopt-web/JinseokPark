export interface SignUpRequest {
  loginId: string;
  password: string;
  name: string;
  email: string;
  age: number;
  part: string;
}

export interface LoginRequest {
  loginId: string;
  password: string;
}

interface BaseResponse {
  success: boolean;
  status: number;
  message: string;
  code: string;
  meta?: {
    path: string;
    timestamp: string;
  };
}

export type SignUpResponse = BaseResponse;

export interface LoginResponse extends BaseResponse {
  data?: {
    userId: number;
  };
}
