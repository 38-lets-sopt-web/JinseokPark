import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSignUp } from "../api/auth";

import type { SignUpRequest } from "../model/types";

import { ROUTES } from "../../../shared/constants/routes";
import { MESSAGE } from "../../../shared/constants/message";

export const useSignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const signUp = async (userData: SignUpRequest) => {
    setIsLoading(true);

    try {
      const response = await postSignUp(userData);

      if (response.success) {
        alert(MESSAGE.SIGN_UP_SUCCESS);
        navigate(ROUTES.LOGIN);
      }
    } catch {
      alert(MESSAGE.SIGN_UP_FAILED);
    } finally {
      setIsLoading(false);
    }
  };

  return { signUp, isLoading };
};
