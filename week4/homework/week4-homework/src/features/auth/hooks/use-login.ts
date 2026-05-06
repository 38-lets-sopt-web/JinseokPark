import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../api/auth";
import type { LoginRequest } from "../model/types";

export const useLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const login = async (loginData: LoginRequest) => {
    setIsLoading(true);
    try {
      const response = await postLogin(loginData);

      if (response.success && response.data) {
        localStorage.setItem("userId", String(response.data.userId));
        navigate("/mypage");
      }
    } catch {
      setErrorMessage("로그인에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, errorMessage };
};
