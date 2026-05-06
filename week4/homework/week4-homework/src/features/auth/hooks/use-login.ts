import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../api/auth";

import type { LoginRequest } from "../model/types";

import { ROUTES } from "../../../shared/constants/routes";
import { MESSAGE } from "../../../shared/constants/message";

const STORAGE_KEY = "userId";

export const useLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const login = async (loginData: LoginRequest) => {
    setIsLoading(true);
    try {
      const response = await postLogin(loginData);

      if (response.success && response.data) {
        localStorage.setItem(STORAGE_KEY, String(response.data.userId));
        navigate(ROUTES.MYPAGE);
      }
    } catch {
      setErrorMessage(MESSAGE.ERROR);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, errorMessage };
};
